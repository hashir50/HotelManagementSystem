import express from 'express';
import Room from '../models/Room.js';

const router = express.Router();

// Create Room
router.post('/', async (req, res) => {
    try {
        console.table(req.body);
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error creating room' });
    }
});

// Get All Rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find().populate('type'); // Corrected 'RoomType' to 'type'
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching rooms' });
    }
});

// Get Room by ID
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id).populate('type'); // Corrected 'RoomType' to 'type'
        if (!room) return res.status(404).json({ error: 'Room not found' });
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching room' });
    }
});

// Update Room
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!room) return res.status(404).json({ error: 'Room not found' });
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error updating room' });
    }
});

// Delete Room
router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) return res.status(404).json({ error: 'Room not found' });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting room' });
    }
});

export default router;
