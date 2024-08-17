import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import roleRoutes from './routes/RoleRoutes.js';
import roomTypeRoutes from './routes/RoomTypeRoutes.js';
import roomRoutes from './routes/RoomRoutes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
async function connectToDB() {
    try {
        console.log(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToDB();

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(__dirname));

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/roomType', roomTypeRoutes);
app.use('/api/room', roomRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
