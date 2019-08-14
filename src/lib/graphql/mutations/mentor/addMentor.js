import { GraphQLString } from 'graphql';
import mentorType from '../../types/mentorType';
import mentorModel from '../../../database/models/mentor';

const addMentor = {
  type: mentorType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parent, args) {
    return mentorModel
      .findOne({ email: args.email })
      .then(user => {
        if (user) throw new Error('User already exists');
        return bcrypt.hash(args.password, 12);
      })
      .then(hashedPassword => {
        const User = new mentorModel({
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

export default addMentor;
