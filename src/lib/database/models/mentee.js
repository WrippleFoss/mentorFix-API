const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentee = new Schema({
  id: String,
  username: String,
  name: String,
  verified: String,
  password: { type: String, required: true },
  bio: String,
  location: String,
  public_links: Array,
  private_links: Array,
  email: { type: String, required: true },
  following: Object, // Type will be changed to array of `mentorTypeID`
  skills: Array,
  mentors: Array
});

module.exports = mongoose.model('Mentee', mentee);
