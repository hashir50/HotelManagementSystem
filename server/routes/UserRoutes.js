import { Router } from "express";
import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';
import moment from 'moment-timezone';

const userRoutes = Router();
const convertToLocalTime = (date) => {
    return moment(date).tz('Asia/Karachi').format();
};

// Middleware for validation
const userValidation = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('contactNumber').notEmpty().withMessage('Contact Number is required'),
    check('role').notEmpty().withMessage('Role is required')
];

// get all users
userRoutes.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('role');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users by role. Please try again later.' });
    }
});

// create a new user
userRoutes.post('/', userValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, contactNumber, address, role, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            contactNumber,
            address,
            role: role
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create user. ' + error.message });
    }
});

// delete a user
userRoutes.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete user. ' + error.message });
    }
});

// update a user
userRoutes.put('/:id', userValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update user. ' + error.message });
    }
});

export default userRoutes;
