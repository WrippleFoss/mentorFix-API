import menteeType from '../../types/menteeType';
import menteeModel from '../../../database/models/mentee';
import { GraphQLString } from 'graphql';

const updateMentee = {
  type: menteeType,
  args: {
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    bio: { type: GraphQLString },
    location: { type: GraphQLString },
    links: { type: GraphQLString },
    email: { type: GraphQLString },
    followers: { type: GraphQLString },
    skills: { type: GraphQLString }
  },
  resolve: async (parents, args, req) => {
    if (!req.isAuth) {
      throw new Error('unauthenticated');
    }

    const UpdateMenteeDB = await menteeModel.findOneAndUpdate(
      { email: args.email }, //later change it to ID
      { $set: { ...args } }, //check to merge with previous things
      { new: true }
    );
    return UpdateMenteeDB;
  }
};
export default updateMentee;
