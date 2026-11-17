import express from 'express';
import { getSubscribers, subscribe } from '../controllers/subscriberController.js';

const router = express.Router();

router.route('/')
  .get(getSubscribers)
  .post(subscribe);

export default router;
