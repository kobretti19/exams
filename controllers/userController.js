const User = require('../models/userModel');

exports.getAll = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message,
    });
  }
};
