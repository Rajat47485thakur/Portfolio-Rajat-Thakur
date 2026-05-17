const errorHandler = (err, req, res, next) => {
  console.error(`[Error Context] ${err.stack}`);

  // MongoDB validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({ message: 'Validation Error', errors: messages });
  }

  // MongoDB duplicate key errors
  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({ message: `Duplicate value entered for field: ${field}` });
  }

  // Default fallback
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = errorHandler;
