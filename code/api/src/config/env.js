// Imports
import dotenv from 'dotenv';

// Load .env
dotenv.config();

// Environment
export const NODE_ENV = process.env.NODE_ENV;

// Port

// PORT NUMBER FOR EXPRESS SERVER
export const PORT = process.env.PORT || 8000;
