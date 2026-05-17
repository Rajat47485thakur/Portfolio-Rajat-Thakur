const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const path = require('path');

// Local disk storage engine for PDF resumes
const localDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../../uploads/resumes');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // Sanitize filename and prep timestamp
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '');
    cb(null, `${Date.now()}-${cleanName}`);
  }
});

// Setup Cloudinary storage engine
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Dynamic folder assignment based on upload route / query
    let folder = 'portfolio/general';
    let allowedFormats = ['jpeg', 'png', 'jpg', 'webp'];
    
    if (req.originalUrl.includes('projects')) {
      folder = 'portfolio/projects';
    } else if (req.originalUrl.includes('blogs')) {
      folder = 'portfolio/blogs';
    } else if (req.originalUrl.includes('settings')) {
      folder = 'portfolio/branding';
    }

    return {
      folder: folder,
      resource_type: 'image',
      allowed_formats: allowedFormats,
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`
    };
  }
});

// Hybrid storage engine that channels PDFs to disk in development, and to Cloudinary in production
const hybridStorage = {
  _handleFile: (req, file, cb) => {
    if ((file.mimetype === 'application/pdf' || file.fieldname === 'resumePdf') && process.env.NODE_ENV !== 'production') {
      localDiskStorage._handleFile(req, file, cb);
    } else {
      cloudinaryStorage._handleFile(req, file, cb);
    }
  },
  _removeFile: (req, file, cb) => {
    if ((file.mimetype === 'application/pdf' || file.fieldname === 'resumePdf') && process.env.NODE_ENV !== 'production') {
      localDiskStorage._removeFile(req, file, cb);
    } else {
      cloudinaryStorage._removeFile(req, file, cb);
    }
  }
};

// Configure upload parser
const upload = multer({
  storage: hybridStorage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

module.exports = upload;
