import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router } from "express";


const authRouter = Router();


authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).populate('role');;
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        };
        const token = jwt.sign(
            { username: user.username, role: user.role }, // Payload
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' } // Token expiration
        );
        return res.json({ message: 'Login successful', token: token },);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// register a new user
authRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password, contactNumber, address, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        let roleId = role;
        if (!role) {
            const guestRole = await Role.findOne({ name: 'Guest' });
            if (guestRole) {
                roleId = guestRole._id;
            } else {
                return res.status(400).json({ message: 'Default role not found' });
            }
        }
        const user = new User({
            name,
            email,
            password: hashedPassword,
            contactNumber,
            address,
            role: roleId,
        });

        await user.save();
        return res.status(201).json({ message: 'User created', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
);

// sample protected route, implement JWT verification
authRouter.get('/aptech', (req, res) => {
    try {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'admin');
        return res.json({ message: 'Protected route', user: decoded });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
});

export default authRouter;