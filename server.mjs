import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import starRoutes from './routes/starRoutes.mjs';
import { stars } from './data/data.mjs';
import Star from './models/starSchema.mjs'

// Setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use('/star', starRoutes);

// app.get('/seed', async (req, res) => {

//   // OPtional step
//   await Star.deleteMany({})

//   // Create items in database
//   await Star.create(songs)

//   res.send('Seeding database')
// });

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});