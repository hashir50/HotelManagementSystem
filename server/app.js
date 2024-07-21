import express from 'express';
import mongoose from 'mongoose';
import db from './config/db.js';
import userRoutes from './routes/UserRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import roleRoutes from './routes/RoleRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
async function connectToDB() {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToDB();

// routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
//app.use('/api/auth', authRouter);

app.get('/',(req,res)=>{res.send(`<h1>Hello World!</h1>`) });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
