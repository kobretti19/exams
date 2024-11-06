const mongoose = require('mongoose');
const validator = require('validator');

const academySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Ve molime vneseto go imeto na Akademijata'],
  },
  adress: {
    type: String,
    unique: [true, 'Ve molime vnesete ja adresata na Akademijata'],
  },
});

const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;
