const Settings = require('../models/Settings');
const cloudinary = require('../config/cloudinary');

exports.getSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    
    // Auto-create a default branding record if none exist yet
    if (!settings) {
      settings = await Settings.create({
        portfolioTitle: 'Rajat Thakur',
        heroText: 'Software Engineer | Angular & Node.js Specialist',
        aboutMarkdown: 'Building scalable, SEO-optimized, and real-time enterprise web applications using modern Angular (v14-20), SSR, Node.js, and WebSockets.',
        profileImageUrl: 'assets/profile.png',
        resumePdfUrl: 'assets/Rajat_Thakur_2Y_Experience_Angular_Nodejs_Developer.pdf',
        socialLinks: {
          linkedin: 'https://www.linkedin.com/in/rajat-thakur-226b14223/',
          github: 'https://github.com/Rajat47485thakur'
        }
      });
    }
    
    res.json(settings);
  } catch (error) {
    next(error);
  }
};

exports.updateSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    const settingsData = { ...req.body };

    if (!settings) {
      settings = new Settings();
    }

    // Handle profile image upload
    if (req.files && req.files.profileImage) {
      // Purge old image
      if (settings.profileImageUrl && settings.profileImageUrl.includes('cloudinary')) {
        try {
          const publicId = settings.profileImageUrl.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`portfolio/branding/${publicId}`);
        } catch (err) {
          console.error('Failed to purge old profile photo', err);
        }
      }
      settingsData.profileImageUrl = req.files.profileImage[0].path;
    }

    // Handle PDF Resume file upload
    if (req.files && req.files.resumePdf) {
      const file = req.files.resumePdf[0];

      // Purge old PDF
      if (settings.resumePdfUrl) {
        if (settings.resumePdfUrl.includes('cloudinary')) {
          try {
            const publicId = settings.resumePdfUrl.split('/').pop().split('.')[0];
            // Since resume is image resource type
            await cloudinary.uploader.destroy(`portfolio/resumes/${publicId}`, { resource_type: 'image' });
          } catch (err) {
            console.error('Failed to purge old resume PDF from Cloudinary', err);
          }
        } else if (settings.resumePdfUrl.includes('/uploads/resumes/')) {
          try {
            const fs = require('fs');
            const path = require('path');
            const filename = settings.resumePdfUrl.split('/uploads/resumes/')[1];
            const localPath = path.join(__dirname, '../../uploads/resumes', filename);
            if (fs.existsSync(localPath)) {
              fs.unlinkSync(localPath);
            }
          } catch (err) {
            console.error('Failed to delete old local resume PDF', err);
          }
        }
      }

      // Save new PDF path
      if (file.filename) {
        settingsData.resumePdfUrl = `${req.protocol}://${req.get('host')}/uploads/resumes/${file.filename}`;
      } else {
        settingsData.resumePdfUrl = file.path;
      }
    }

    // Parse nested objects if sent as strings (JSON strings)
    if (typeof settingsData.socialLinks === 'string') {
      try { settingsData.socialLinks = JSON.parse(settingsData.socialLinks); } catch (e) {}
    }
    if (typeof settingsData.themeColors === 'string') {
      try { settingsData.themeColors = JSON.parse(settingsData.themeColors); } catch (e) {}
    }

    const updated = await Settings.findByIdAndUpdate(settings._id, settingsData, { new: true, upsert: true, runValidators: true });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
