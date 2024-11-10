const Course = require('./../models/courseModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAll = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.id) filter = { course: req.params.id };
    const features = new APIFeatures(Course.find(), req.query)
      .filter()
      .sort()
      .filter()
      .limitFields()
      .paginate();

    const courses = await features.query;

    // const courses = await Course.find();
    res.status(200).json({
      status: 'success',
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message,
    });
  }
};
exports.getOne = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return next(`No courses found with that ID`, 404);
    }
    res.status(200).json({
      status: 'success',
      course,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      status: 'success',
      course,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!course) {
      return res.send(`No course found with ID:${course}`);
    }

    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.send(`No course found with ID:${course}`);
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
