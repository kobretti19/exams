const Academy = require('./../models/academyModel');
const Course = require('./../models/courseModel');

exports.test = async (req, res, next) => {
  try {
    res.status(200).render('homepage');
  } catch (err) {
    res
      .status(400)
      .send(
        `Ima Nekoj problem so otvaranjeto na dadenata strana,obidete se povtorno pokasno`
      );
  }
};

exports.getAllAcademy = async (req, res) => {
  try {
    const academy = await Academy.find();

    res.render('allAcademy', { academy: academy });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAcademy = async (req, res) => {
  try {
    const academy = await Academy.create(req.body);

    res.redirect('/allAcademy');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.render('allCourses', { courses: courses });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.redirect('/allCourses');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
