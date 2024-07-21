import { Router } from 'express';
import Role from '../models/Role.js';

const roleRoutes = Router();

// Get all roles
roleRoutes.get('/', async (req, res) => {
    const roles = await Role.find();
    res.json(roles);
});

// Create a new role
roleRoutes.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const newRole = new Role({ name });
        await newRole.save();
        res.status(201).json(newRole);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default roleRoutes;
