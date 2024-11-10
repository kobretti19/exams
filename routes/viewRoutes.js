const express = require('express');

const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router.get('/test', authController.isLoggedIn, viewController.test);

module.exports = router;
