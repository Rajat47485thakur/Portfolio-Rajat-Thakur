const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Helper to generate access token
const generateAccessToken = (adminId) => {
  return jwt.sign(
    { id: adminId },
    process.env.JWT_ACCESS_SECRET || 'local_access_secret_77221199338844',
    { expiresIn: process.env.JWT_ACCESS_EXPIRATION || '15m' }
  );
};

// Helper to generate refresh token
const generateRefreshToken = (adminId) => {
  return jwt.sign(
    { id: adminId },
    process.env.JWT_REFRESH_SECRET || 'local_refresh_secret_88332200449955',
    { expiresIn: process.env.JWT_REFRESH_EXPIRATION || '7d' }
  );
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate tokens
    const accessToken = generateAccessToken(admin._id);
    const refreshToken = generateRefreshToken(admin._id);

    // Save refresh token to db
    admin.refreshToken = refreshToken;
    await admin.save();

    res.json({
      accessToken,
      refreshToken,
      admin: { id: admin._id, username: admin.username }
    });
  } catch (error) {
    next(error);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || 'local_refresh_secret_88332200449955');
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }

    const admin = await Admin.findById(decoded.id);
    if (!admin || admin.refreshToken !== refreshToken) {
      return res.status(401).json({ message: 'Invalid refresh token mapping' });
    }

    // Generate fresh tokens
    const nextAccessToken = generateAccessToken(admin._id);
    const nextRefreshToken = generateRefreshToken(admin._id);

    admin.refreshToken = nextRefreshToken;
    await admin.save();

    res.json({
      accessToken: nextAccessToken,
      refreshToken: nextRefreshToken
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (refreshToken) {
      const admin = await Admin.findOne({ refreshToken });
      if (admin) {
        admin.refreshToken = null;
        await admin.save();
      }
    }
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
