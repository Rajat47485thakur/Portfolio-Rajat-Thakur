const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  technologies: {
    type: [String],
    default: []
  },
  src: {
    type: String,
    required: true
  },
  link: {
    type: String,
    trim: true
  },
  stats: [{
    label: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: String }
  }],
  features: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }
  }],
  challenges: [{
    problem: { type: String, required: true },
    solution: { type: String, required: true }
  }],
  impact: {
    type: [String],
    default: []
  },
  architecture: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  seoTitle: {
    type: String,
    trim: true
  },
  seoDescription: {
    type: String,
    trim: true
  }
}, { timestamps: true });

// Create text index for search optimization
projectSchema.index({ title: 'text', description: 'text', technologies: 'text' });

module.exports = mongoose.model('Project', projectSchema);
