const Academy = require('./../models/academyModel');

exports.getAll = async (req, res) => {
  try {
    const academy = await Academy.find();

    res.status(200).json({
      status: 'success',
      result: academy.length,
      data: academy,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);
    if (!academy) {
      return next(`No academy found with that ID`, 404);
    }
    res.status(200).json({
      status: 'success',
      academy,
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
    const academy = await Academy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: academy,
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
