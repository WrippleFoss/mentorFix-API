const { GraphQLObjectType } = require('graphql');
const menteeModel = require('../../database/models/mentee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const LoginResolver = async (parent, args) => {
  const mentee = await menteeModel.findOne({ email: args.email });
  if (!mentee) {
    throw new Error('No such user exists');
  }
  const isEqual = await bcrypt.compare(args.password, mentee.password);
  if (!isEqual) {
    throw new Error('Password is incorrect');
  }
  const token = jwt.sign(
    { userID: mentee.id, email: mentee.email },
    'supersecretkey',
    { expiresIn: '1h' }
  ); //later needs to have a env based secret
  return {
    userId: mentee._id,
    token: token,
    tokenExpiration: 1
  };
};

module.exports = LoginResolver;
