const graphql = require('graphql');
const ConferenceType = require('../types/conferenceType');
const MentorType = require('../types/mentorType');
const mentorModel = require('../../database/models/mentor');

const { GraphQLObjectType, GraphQLID } = graphql;

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    conference: {
      type: ConferenceType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return dummy[0];
        // this is where we write code to get data from db
      }
    },
    mentor: {
      type: MentorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return `updated`;
      }
    }
  }
});
module.exports = rootQuery;
