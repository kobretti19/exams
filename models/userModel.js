const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Potrebno e da vnesete ime na korisnikot'],
  },
  email: {
    type: String,
    required: [true, 'Korisnikot mora da ima email adresa'],
    unique: true,
    lowercase: [true, 'email adresata mora da sodrzi samo mali bukvi'],
    validate: [validator.isEmail, 'Ve molime vnesete validna email adresa'],
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Ve molime vnesete ja vasata lozinka'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Ve molime potvrdete ja vasata lozinka'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Lozinkite ne se sovpagjaat!',
    },
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
