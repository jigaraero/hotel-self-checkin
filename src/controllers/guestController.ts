import { Request, Response } from 'express';
import { Guest } from '../models/guest';

export const createGuest = async (req: Request, res: Response) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(201).json(guest);
  } catch (err) {
    res.status(400).json({ error: 'Unable to create guest', details: err });
  }
};

export const listGuests = async (_req: Request, res: Response) => {
  const guests = await Guest.findAll();
  res.json(guests);
};
