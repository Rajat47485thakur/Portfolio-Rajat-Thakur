const SEO = require('../models/SEO');
const cloudinary = require('../config/cloudinary');

exports.getSEO = async (req, res, next) => {
  try {
    let seo = await SEO.findOne();
    
    // Auto-create a default SEO record if none exist yet
    if (!seo) {
      seo = await SEO.create({
        globalTitle: 'Rajat Thakur | Enterprise Angular & Node.js Software Engineer',
        globalDescription: 'Software Engineer with 2 years of experience building high-performance, real-time web applications using Angular 14-20, SSR, Node.js, WebSockets, and scalable frontend architectures.',
        keywords: ['Rajat Thakur', 'Angular Developer', 'Software Engineer', 'Frontend Architecture'],
        canonicalUrl: 'https://rajatthakur.dev',
        openGraphImage: 'assets/profile.png'
      });
    }
    
    res.json(seo);
  } catch (error) {
    next(error);
  }
};

exports.updateSEO = async (req, res, next) => {
  try {
    let seo = await SEO.findOne();
    const seoData = { ...req.body };

    if (!seo) {
      seo = new SEO();
    }

    // Handle OpenGraph Image Upload
    if (req.file) {
      if (seo.openGraphImage && seo.openGraphImage.includes('cloudinary')) {
        try {
          const publicId = seo.openGraphImage.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`portfolio/branding/${publicId}`);
        } catch (err) {
          console.error('Failed to purge old openGraph image', err);
        }
      }
      seoData.openGraphImage = req.file.path;
    }

    if (typeof seoData.keywords === 'string') {
      try {
        seoData.keywords = JSON.parse(seoData.keywords);
      } catch (e) {
        seoData.keywords = seoData.keywords.split(',').map(k => k.trim());
      }
    }

    const updated = await SEO.findByIdAndUpdate(seo._id, seoData, { new: true, upsert: true, runValidators: true });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
