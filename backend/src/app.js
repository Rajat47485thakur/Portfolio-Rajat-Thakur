const express = require('express');
const cors = require('cors');
require('dotenv').config();

const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middleware/error');

// Initialize database
connectDB();

const app = express();

// Config CORS
app.use(cors({
  origin: '*', // Allow all cross-origins for serverless flexibility
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Express parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routing mounts
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// App fallback landing page
app.get('/', (req, res) => {
  res.send('Portfolio CMS Platform REST API is running. Access endpoints via /api.');
});

// Route not found fallback
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource endpoint not found' });
});

// Global error filter
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Server] Portfolio backend listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
