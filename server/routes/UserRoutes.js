import { Router } from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import moment from 'moment-timezone';

const userRoutes = Router();
const convertToLocalTime = (date) => {
    return moment(date).tz('Asia/Karachi').format();
};

// get all users
userRoutes.get('/', async (req, res) => {
    var users = await User.find().populate('role');
    var usersWithLocalTime = users.map(user => {
        return {
            ...user.toObject(),
            createdAt: convertToLocalTime(user.createdAt),
            updatedAt: convertToLocalTime(user.updatedAt),
            role: {
                ...user.role.toObject(),
                createdAt: convertToLocalTime(user.role.createdAt),
                updatedAt: convertToLocalTime(user.role.updatedAt),
            }
        };
    });
    res.json(usersWithLocalTime);
}
);

// create a new user
userRoutes.post('/', async function handler(req, res) {
    try {
        const { body } = req;
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);
        var user = new User(
            {
                name:body.name,
                email: body.email,
                password: hashedPassword,
                contactNumber: body.contactNumber,
                address: body.address,
                role: body.roleId
            }
        );
        await user.save();
        res.status(201).json();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
);

// delete a user
userRoutes.delete('/:id', async function handler(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
);

// update a user
userRoutes.put('/:id', async function handler(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
);

export default userRoutes;