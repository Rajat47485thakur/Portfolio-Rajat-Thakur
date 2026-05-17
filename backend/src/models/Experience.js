const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  achievements: {
    type: [String],
    default: []
  },
  technologies: {
    type: [String],
    default: []
  },
  ordering: {
    type: Number,
    default: 0
  },
  currentlyWorking: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
