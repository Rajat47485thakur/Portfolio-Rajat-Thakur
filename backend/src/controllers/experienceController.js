const Experience = require('../models/Experience');

exports.getAllExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find().sort({ ordering: 1, createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    next(error);
  }
};

exports.createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (error) {
    next(error);
  }
};

exports.updateExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!experience) {
      return res.status(404).json({ message: 'Experience entry not found' });
    }
    res.json(experience);
  } catch (error) {
    next(error);
  }
};

exports.deleteExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndDelete(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience entry not found' });
    }
    res.json({ success: true, message: 'Experience entry deleted successfully' });
  } catch (error) {
    next(error);
  }
};
