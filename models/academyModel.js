const mongoose = require('mongoose');
const validator = require('validator');

const academySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Ve molime vneseto go imeto na Akademijata'],
  },
  address: {
    type: String,
    unique: [false, 'Ve molime vnesete ja adresata na Akademijata'],
  },
});

const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;
