const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  globalTitle: {
    type: String,
    required: true,
    trim: true
  },
  globalDescription: {
    type: String,
    required: true,
    trim: true
  },
  keywords: {
    type: [String],
    default: []
  },
  canonicalUrl: {
    type: String,
    trim: true
  },
  openGraphImage: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('SEO', seoSchema);
