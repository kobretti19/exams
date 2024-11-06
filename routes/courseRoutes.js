const express = require('express');
const courseController = require('./../controllers/courseController');

const router = express.Router();

router.route('/').get(courseController.getAll).post(courseController.create);

router
  .route('/:id')
  .get(courseController.getOne)
  .patch(courseController.update)
  .delete(courseController.delete);

module.exports = router;
