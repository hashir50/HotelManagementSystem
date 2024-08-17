import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// Create Reservation
router.post('/', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error creating reservation' });
    }
});

// Get All Reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('guest room').exec();
        res.json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching reservations' });
    }
});

// Update Reservation
router.put('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error updating reservation' });
    }
});

// Delete Reservation
router.delete('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting reservation' });
    }
});

export default router;
