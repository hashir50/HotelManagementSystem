import express from 'express';
import mongoose from 'mongoose';
import db from './config/db.js';
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
// // Routes
// const someRoute = require('./routes/someRoute');
// app.use('/api/someRoute', someRoute);

app.get('/',(req,res)=>{res.send(`<h1>Hello World!</h1>`) });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
