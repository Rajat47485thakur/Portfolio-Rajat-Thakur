const Contact = require('../models/Contact');

exports.createContactMessage = async (req, res, next) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;
    if (!fullName || !subject || !message) {
      return res.status(400).json({ message: 'Full name, subject, and message are required' });
    }

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message
    });

    res.status(201).json({ success: true, message: 'Message sent successfully!', data: contact });
  } catch (error) {
    next(error);
  }
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

exports.updateMessageStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['unread', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ message: 'Invalid message status' });
    }

    const message = await Contact.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
    if (!message) {
      return res.status(404).json({ message: 'Message log not found' });
    }
    res.json(message);
  } catch (error) {
    next(error);
  }
};

exports.deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await Contact.findByIdAndDelete(id);
    if (!message) {
      return res.status(404).json({ message: 'Message log not found' });
    }
    res.json({ success: true, message: 'Message log deleted successfully' });
  } catch (error) {
    next(error);
  }
};
