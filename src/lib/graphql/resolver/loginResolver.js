const { GraphQLObjectType } = require('graphql');
const menteeModel = require('../../database/models/mentee');
const mentorModel = require('../../database/models/mentor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const LoginResolver = async (parent, args) => {
  if(args.role==='mentee'){
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
          tokenExpiration: 1,
          userRole: args.role
        };      
}
  else if(args.role==='mentor'){
    const mentor = await mentorModel.findOne({ email: args.email });
    if (!mentor) {
      throw new Error('No such user exists');
    }
    const isEqual = await bcrypt.compare(args.password, mentor.password);
    if (!isEqual) {
      throw new Error('Password is incorrect');
    }
      const token = jwt.sign(
        { userID: mentor.id, email: mentor.email },
        'supersecretkey',
        { expiresIn: '1h' }
      ); //later needs to have a env based secret
      return {
        userId: mentor._id,
        token: token,
        tokenExpiration: 1,
        userRole: args.role
      }
  }

  else{
    throw new Error('Role not defined')
  }

};

module.exports = LoginResolver;
