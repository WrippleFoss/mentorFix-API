import mentorType from '../../query/types/mentorType';
import mentorModel from '../../../database/models/mentor';
import { GraphQLString } from 'graphql';

const updateMentor = {
  type: mentorType,
  args: {
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    webinars: { type: GraphQLString },
    bio: { type: GraphQLString },
    location: { type: GraphQLString },
    links: { type: GraphQLString },
    email: { type: GraphQLString },
    followers: { type: GraphQLString },
    skills: { type: GraphQLString }
  },
  resolve: async (parents, args) => {
    const UpdateMentorDB = await mentorModel.findOneAndUpdate(
      { email: args.email }, // later change it to ID
      { $set: { ...args } }, // check to merge with previous things
      { new: true }
    );
    return UpdateMentorDB;
  }
};
export default updateMentor;
