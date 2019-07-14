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
    let mentor = new mentorModel({
      email: args.email,
      password: args.password
    });
    return await mentor.save();
  }
};

export default addMentor;
