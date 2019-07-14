const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentor = new Schema({
  id: String,
  username: String,
  name: String,
  webinars: Array, // Type will be changed to `WebinarTypes`
  verified: String,
  password: { type: String, required: true },
  bio: String,
  location: String,
  public_links: Object,
  private_links: Object,
  email: { type: String, required: true },
  followers: Array, // Type will be changed to array of `menteeTypeID`
  skillset: Array,
  certifications: Array
});

module.exports = mongoose.model('Mentor', mentor);
