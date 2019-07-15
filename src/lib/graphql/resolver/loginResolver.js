const { GraphQLObjectType } = require('graphql');
const menteeModel = require('../../database/models/mentee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const LoginResolver = async args => {
  console.log(args);
  const mentee = menteeModel.findOne({ email: args.email });
  if (!mentee) {
    throw new Error('No such user exists');
  }
  const isEqual = await bcrypt.compare(args.password, user.password);

  if (!isEqual) {
    throw new Error('Password is incorrect');
  }
  const token = jwt.sign(
    { userID: user.id, email: user.email },
    'supersecretkey',
    { expiresIn: '1h' }
  ); //later needs to have a env based secret
  return {
    userId: user.id,
    token: token,
    tokenExpiration: 1
  };
};

module.exports = LoginResolver;
