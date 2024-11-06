const express = require('express');
const academyController = require('./../controllers/academyController');

const router = express.Router();

router.route('/').get(academyController.getAll).post(academyController.create);

router
  .route('/:id')
  .get(academyController.getOne)
  .patch(academyController.update)
  .delete(academyController.delete);

module.exports = router;
