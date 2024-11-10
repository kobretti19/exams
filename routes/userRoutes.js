const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(authController.protect);

router.route('/').get(userController.getAll);

router
  .route('/:id')
  .delete(userController.restrictTo('admin'), userController.deleteMe)
  .patch(userController.restrictTo('admin'), userController.updateMe);

module.exports = router;
