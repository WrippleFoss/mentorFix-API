const graphql = require('graphql');
const ConferenceType = require('../types/conferenceType');
const MentorType = require('../types/mentorType');
const mentorModel = require('../../database/models/mentor');
const MenteeType = require('../types/menteeType');
const LoginType = require('../types/loginType');
const LoginResolver = require('../resolver/loginResolver');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

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
    },
    mentee: {
      type: MenteeType,
      args: {
        id: { type: GraphQLID } //later there needs to be a check for the public and the private stuff.
      },
      resolve(parent, args) {
        return `mentee resolved`;
      }
    },
    login: {
      type: LoginType,
      args: {
        email: { type: GraphQLString, required: true },
        password: { type: GraphQLString, required: true }
      },
      resolve: LoginResolver
    }
  }
});
module.exports = rootQuery;
