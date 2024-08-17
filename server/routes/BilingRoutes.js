import express from 'express';
import Billing from '../models/Billing.js';

const router = express.Router();

// Create Billing
router.post('/', async (req, res) => {
    try {
        const billing = new Billing(req.body);
        await billing.save();
        res.status(201).json(billing);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error creating billing' });
    }
});

// Get All Billings
router.get('/', async (req, res) => {
    try {
        const billings = await Billing.find().populate('reservation').exec();
        res.json(billings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching billings' });
    }
});

// Update Billing
router.put('/:id', async (req, res) => {
    try {
        const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!billing) return res.status(404).json({ error: 'Billing not found' });
        res.json(billing);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error updating billing' });
    }
});

// Delete Billing
router.delete('/:id', async (req, res) => {
    try {
        const billing = await Billing.findByIdAndDelete(req.params.id);
        if (!billing) return res.status(404).json({ error: 'Billing not found' });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting billing' });
    }
});

export default router;
