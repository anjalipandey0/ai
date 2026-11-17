import express from 'express';
import { getSwatchRequests, createSwatchRequest } from '../controllers/swatchController.js';

const router = express.Router();

router.route('/')
  .get(getSwatchRequests)
  .post(createSwatchRequest);

export default router;
