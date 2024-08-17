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
// Update a role
roleRoutes.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, isActive } = req.body;
        const updatedRole = await Role.findByIdAndUpdate(id, { name, isActive }, { new: true });
        res.json(updatedRole);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a role
roleRoutes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Role.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default roleRoutes;
