import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './models';
import guestRoutes from './routes/guestRoutes';
import reservationRoutes from './routes/reservationRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/guests', guestRoutes);
app.use('/reservations', reservationRoutes);

connectDb();

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
