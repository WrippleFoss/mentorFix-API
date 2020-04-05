const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentor = new Schema({
  id: String,
  username: String,
  name: String,
  webinars: Array, // Type will be changed to `WebinarTypes`
  verified: { type: Boolean, default: false },
  password: { type: String, required: true },
  bio: String,
  role: { type: String, required: true },
  location: String,
  links: Array, // Type will be changed to `{}_public profile links_`
  email: { type: String, required: true },
  followers: Array, // Type will be changed to `menteeTypeID`
  expertise: Array
});

module.exports = mongoose.model('Mentor', mentor);
