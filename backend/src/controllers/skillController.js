const Skill = require('../models/Skill');

exports.getAllSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ category: 1, ordering: 1 });
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

exports.createSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    next(error);
  }
};

exports.updateSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    next(error);
  }
};

exports.deleteSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findByIdAndDelete(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ success: true, message: 'Skill deleted successfully' });
  } catch (error) {
    next(error);
  }
};
