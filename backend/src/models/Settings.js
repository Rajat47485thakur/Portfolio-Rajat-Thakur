const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  portfolioTitle: {
    type: String,
    default: 'Rajat Thakur',
    trim: true
  },
  heroText: {
    type: String,
    trim: true
  },
  aboutMarkdown: {
    type: String
  },
  profileImageUrl: {
    type: String
  },
  resumePdfUrl: {
    type: String
  },
  socialLinks: {
    linkedin: { type: String, trim: true },
    github: { type: String, trim: true },
    twitter: { type: String, trim: true }
  },
  themeColors: {
    primary: { type: String, default: '#0d1117' },
    accent: { type: String, default: '#00f2fe' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
