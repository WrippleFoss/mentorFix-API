import { GraphQLString } from 'graphql';
import menteeType from '../../query/types/mentorType';
import menteeModel from '../../../database/models/mentee';

const addMentor = {
  type: menteeType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parent, args) {
    let mentee = new menteeModel({
      email: args.email,
      password: args.password
    });
    return await mentee.save();
  }
};

export default addMentor;
