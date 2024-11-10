const express = require('express');
const courseController = require('./../controllers/courseController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/').get(courseController.getAll).post(courseController.create);

router
  .route('/:id')
  .get(courseController.getOne)
  .patch(courseController.update)
  .delete(authController.protect, courseController.delete);

module.exports = router;
