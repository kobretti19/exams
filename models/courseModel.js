const mongoose = require('mongoose');
const validator = require('validator');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: [true, 'Mora da vnesete ime na kursot'],
  },
  adress: {
    type: String,
    require: [true, 'Mora da vnesete adresa na kursot'],
  },
  teritory: {
    type: String,
    require: [true, 'Mora da se vnese za koja oblast e namenet vneseniot kurs'],
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
