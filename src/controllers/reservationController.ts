import { Request, Response } from 'express';
import { Reservation } from '../models/reservation';

export const createReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: 'Unable to create reservation', details: err });
  }
};

export const listReservations = async (_req: Request, res: Response) => {
  const reservations = await Reservation.findAll();
  res.json(reservations);
};
