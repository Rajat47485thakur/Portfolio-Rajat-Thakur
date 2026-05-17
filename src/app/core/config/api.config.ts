import { isDevMode } from '@angular/core';

// Automatically toggles API Base URL between local development server and live production server
export const API_BASE_URL = isDevMode()
  ? 'http://localhost:5000/api'
  : 'https://rajat-portfolio-backend.onrender.com/api'; // <-- Replace with your live Render backend URL once deployed
