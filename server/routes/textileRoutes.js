import express from 'express';
import {
  getTextiles,
  getTextileById,
  createTextile,
  deleteTextile,
} from '../controllers/textileController.js';

const router = express.Router();

router.route('/')
  .get(getTextiles)
  .post(createTextile);

router.route('/:id')
  .get(getTextileById)
  .delete(deleteTextile);

export default router;
