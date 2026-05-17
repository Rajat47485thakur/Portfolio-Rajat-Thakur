const Project = require('../models/Project');
const cloudinary = require('../config/cloudinary');

// Helper function to generate URL slug
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

exports.getAllProjects = async (req, res, next) => {
  try {
    const { category, search, featured } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (featured) filter.featured = featured === 'true';
    if (search) {
      filter.$text = { $search: search };
    }

    const projects = await Project.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

exports.getProjectByIdOrSlug = async (req, res, next) => {
  try {
    const { idOrSlug } = req.params;
    const isObjectId = idOrSlug.match(/^[0-9a-fA-F]{24}$/);
    
    const project = isObjectId 
      ? await Project.findById(idOrSlug)
      : await Project.findOne({ slug: idOrSlug.toLowerCase() });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    next(error);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const projectData = { ...req.body };
    
    // Automatically upload file from Multer to projectData
    if (req.file) {
      projectData.src = req.file.path;
    } else if (!projectData.src) {
      return res.status(400).json({ message: 'Project image or screenshot is required' });
    }

    // Auto-generate slug if not provided
    if (!projectData.slug) {
      projectData.slug = slugify(projectData.title);
    }
    
    // Check slug uniqueness
    const existing = await Project.findOne({ slug: projectData.slug });
    if (existing) {
      projectData.slug = `${projectData.slug}-${Date.now().toString().slice(-4)}`;
    }

    // Handle parsed nested arrays (e.g. JSON parsed)
    ['stats', 'features', 'challenges', 'technologies', 'impact'].forEach(field => {
      if (typeof projectData[field] === 'string') {
        try {
          projectData[field] = JSON.parse(projectData[field]);
        } catch (e) {
          projectData[field] = [];
        }
      }
    });

    const project = await Project.create(projectData);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectData = { ...req.body };

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Delete old image from Cloudinary if replacing
    if (req.file) {
      if (project.src && project.src.includes('cloudinary')) {
        try {
          const publicId = project.src.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`portfolio/projects/${publicId}`);
        } catch (err) {
          console.error('Failed to delete old image from Cloudinary', err);
        }
      }
      projectData.src = req.file.path;
    }

    // Update slug if title changed
    if (projectData.title && projectData.title !== project.title && !projectData.slug) {
      projectData.slug = slugify(projectData.title);
    }

    // Handle nested parsed arrays
    ['stats', 'features', 'challenges', 'technologies', 'impact'].forEach(field => {
      if (typeof projectData[field] === 'string') {
        try {
          projectData[field] = JSON.parse(projectData[field]);
        } catch (e) {
          // Keep existing value if parsing failed
        }
      }
    });

    const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true, runValidators: true });
    res.json(updatedProject);
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Delete image asset from Cloudinary
    if (project.src && project.src.includes('cloudinary')) {
      try {
        const publicId = project.src.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`portfolio/projects/${publicId}`);
      } catch (err) {
        console.error('Failed to delete Cloudinary project image', err);
      }
    }

    await Project.findByIdAndDelete(id);
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};
