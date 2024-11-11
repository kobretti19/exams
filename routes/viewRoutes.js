const express = require('express');

const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router.get('/', authController.isLoggedIn, viewController.test);
router.get('/login', viewController.login);
router.get('/signup', viewController.signup);
router.post('/signup/user', authController.signup);

router.use(authController.protect);

router.route('/allAcademy').get(viewController.getAllAcademy);
router.route('/allCourses').get(viewController.getAllCourses);
router.route('/allCourses/:id').get(viewController.getOneCourse);
module.exports = router;
