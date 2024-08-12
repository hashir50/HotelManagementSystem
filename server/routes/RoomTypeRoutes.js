import { Router } from 'express';
import RoomType from '../models/RoomType.js';
import upload from '../utils/multerConfig.js';

const roomTypeRoutes = Router();

// Get all room types
roomTypeRoutes.get('/', async (req, res) => {
  try {
    const roomTypes = await RoomType.find().populate('createdBy updatedBy');
    res.json(roomTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a single room type by ID
roomTypeRoutes.get('/:id', async (req, res) => {
  try {
    const roomType = await RoomType.findById(req.params.id).populate('createdBy updatedBy');
    if (!roomType) {
      return res.status(404).json({ message: 'RoomType not found' });
    }
    res.json(roomType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
// Create a new room type with image upload
roomTypeRoutes.post('/', upload.single('image'), async (req, res) => {
    try {
      const { name, isActive, createdBy } = req.body;
      const image = req.file ? req.file.path : ''; 
  
      const newRoomType = new RoomType({
        name,
        image,
        isActive,
        createdBy,
        createdAt: new Date(),
      });
  
      const roomType = await newRoomType.save();
      res.status(201).json(roomType);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });// Delete a room type by ID
roomTypeRoutes.delete('/:id', async (req, res) => {
  try {
    const roomType = await RoomType.findByIdAndDelete(req.params.id);

    if (!roomType) {
      return res.status(404).json({ message: 'RoomType not found' });
    }

    res.json({ message: 'RoomType deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default roomTypeRoutes;
