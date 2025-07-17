import { Router } from 'express';
import { createGuest, listGuests } from '../controllers/guestController';

const router = Router();

router.post('/', createGuest);
router.get('/', listGuests);

export default router;
