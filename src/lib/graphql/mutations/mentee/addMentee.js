import { GraphQLString } from 'graphql';
import menteeType from '../../types/menteeType';
import menteeModel from '../../../database/models/mentee';
import bcrypt from 'bcrypt';

const addMentee = {
  type: menteeType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (parent, args, req) => {
    return menteeModel
      .findOne({ email: args.email })
      .then(user => {
        if (user) {
          throw new Error('User already exits');
        }
        return bcrypt.hash(args.password, 12);
      })
      .then(hashedPassword => {
        const User = new menteeModel({
          email: args.email,
          password: hashedPassword
        });
        return User.save();
      })
      .then(result => {
        return { _id: result.id, ...result._doc, password: null };
      })
      .catch(err => {
        throw err;
      });
  }
};

export default addMentee;
