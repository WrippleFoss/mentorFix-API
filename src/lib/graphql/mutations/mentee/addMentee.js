import { GraphQLString } from 'graphql';
import menteeType from '../../query/types/mentorType';
import menteeModel from '../../../database/models/mentor';

const addMentor = {
  type: menteeType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parent, args) {
    let mentor = new mentorModel({
      email: args.email,
      password: args.password
    });
    return mentor.save();
  }
};

export default addMentor;
