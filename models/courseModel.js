const mongoose = require('mongoose');
const validator = require('validator');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: [true, 'Plese enter a name of the course'],
  },
  address: {
    type: String,
    require: [true, 'Plese enter a address of the course'],
  },
  region: {
    type: String,
    require: [true, 'Plese enter for which region is this course'],
  },
  academy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Academy',
  },
});

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'academy',
    select: '-__v',
  });
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
