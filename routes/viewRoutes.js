const express = require('express');

const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/test', viewController.test);

module.exports = router;
