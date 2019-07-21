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
    // let mentee = new menteeModel({
    //   email: args.email,
    //   password: args.password,
    //   verified: false
    // });
    // return await mentee.save();

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
