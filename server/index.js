import express from 'express';
import cors from 'cors';
import dbConnect from './db/dbConnect.js';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
dbConnect();

app.use(express.json());
app.use(cors());
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('hello to memories app API!!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
