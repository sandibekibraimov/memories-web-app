import express from 'express';
import cors from 'cors';
import dbConnect from './db/dbConnect.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
dbConnect();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
