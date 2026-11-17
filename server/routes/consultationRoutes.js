import express from 'express';
import {
  getConsultations,
  createConsultation,
  updateConsultationStatus,
  deleteConsultation,
} from '../controllers/consultationController.js';

const router = express.Router();

router.route('/')
  .get(getConsultations)
  .post(createConsultation);

router.route('/:id/status')
  .patch(updateConsultationStatus);

router.route('/:id')
  .delete(deleteConsultation);

export default router;
