const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

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

exports.getAllBlogs = async (req, res, next) => {
  try {
    const { status, tag, search } = req.query;
    const filter = {};

    // Public feeds only see published blogs
    if (status) {
      filter.status = status;
    } else if (!req.headers.authorization) {
      filter.status = 'published';
    }

    if (tag) {
      filter.tags = tag;
    }

    if (search) {
      filter.$text = { $search: search };
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

exports.getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug: slug.toLowerCase() });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    // Check access restrictions
    if (blog.status === 'draft' && !req.headers.authorization) {
      return res.status(403).json({ message: 'Access denied to draft blog' });
    }
    
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const blogData = { ...req.body };

    if (req.file) {
      blogData.featuredImage = req.file.path;
    }

    if (!blogData.slug) {
      blogData.slug = slugify(blogData.title);
    }

    // Slug duplication fallback
    const existing = await Blog.findOne({ slug: blogData.slug });
    if (existing) {
      blogData.slug = `${blogData.slug}-${Date.now().toString().slice(-4)}`;
    }

    if (typeof blogData.tags === 'string') {
      try {
        blogData.tags = JSON.parse(blogData.tags);
      } catch (e) {
        blogData.tags = blogData.tags.split(',').map(t => t.trim());
      }
    }

    const blog = await Blog.create(blogData);
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogData = { ...req.body };

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (req.file) {
      // Purge old image from Cloudinary
      if (blog.featuredImage && blog.featuredImage.includes('cloudinary')) {
        try {
          const publicId = blog.featuredImage.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`portfolio/blogs/${publicId}`);
        } catch (err) {
          console.error('Failed to purge old blog image', err);
        }
      }
      blogData.featuredImage = req.file.path;
    }

    if (blogData.title && blogData.title !== blog.title && !blogData.slug) {
      blogData.slug = slugify(blogData.title);
    }

    if (typeof blogData.tags === 'string') {
      try {
        blogData.tags = JSON.parse(blogData.tags);
      } catch (e) {
        blogData.tags = blogData.tags.split(',').map(t => t.trim());
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, blogData, { new: true, runValidators: true });
    res.json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (blog.featuredImage && blog.featuredImage.includes('cloudinary')) {
      try {
        const publicId = blog.featuredImage.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`portfolio/blogs/${publicId}`);
      } catch (err) {
        console.error('Failed to delete blog image asset', err);
      }
    }

    await Blog.findByIdAndDelete(id);
    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    next(error);
  }
};
