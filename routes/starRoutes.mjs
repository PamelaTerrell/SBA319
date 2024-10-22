import express from 'express';
import Star from '../models/starSchema.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    const newStar = new Star(req.body);

    await newStar.save();

    res.json(newStar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
// Read
router.get('/', async (req, res) => {
  try {
    const allStars = await Star.find({});

    res.json(allStars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
// Update
router.put('/:id', async (req, res) => {
  try {
    let updatedStar = await Star.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedStar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
// Delete
router.delete('/:id', async (req, res) => {
  try {
    let deletedStar = await Star.findByIdAndDelete(req.params.id);

    res.json(deletedStar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;