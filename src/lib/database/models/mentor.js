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
  public_links: Array,
  private_links: Array,
  email: { type: String, required: true },
  followers: Object, // Type will be changed to array of `menteeTypeID`
  expertise: Object
});

module.exports = mongoose.model('Mentor', mentor);
