const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentee = new Schema({
  id: String,
  username: String,
  name: String,
  verified: { type: Boolean, default: false },
  password: { type: String, required: true },
  bio: String,
  role: { type: String, required: true },
  location: String,
  links: Array, // Type will be changed to `{}_public profile links_`
  email: { type: String, required: true },
  followers: Object, // Type will be changed to `menteeTypeID`
  skills: Object
});

module.exports = mongoose.model('Mentee', mentee);
