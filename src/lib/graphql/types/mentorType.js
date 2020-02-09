const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList
} = require('graphql');

const followersType = new GraphQLObjectType({
  name: 'followers',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    bio: { type: GraphQLString }
  })
});

const MentorType = new GraphQLObjectType({
  name: 'mentor',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    // webinars: { type: GraphQLString }, //needs to be reviewed for now
    verified: { type: GraphQLBoolean },
    role: 'mentor',
    password: { type: GraphQLString },
    bio: { type: GraphQLString },
    location: { type: GraphQLString },
    links: { type: new GraphQLList(GraphQLString) }, // Type will be changed to `{}_public profile links_`
    email: { type: GraphQLString },
    mentorRequests: { type: new GraphQLList(followersType) },
    followers: { type: new GraphQLList(followersType) }, // Type will be changed to `menteeTypeID`
    expertise: { type: new GraphQLList(GraphQLString) } // Type will be changed to `[]_A list of expertise_`
  })
});

module.exports = MentorType;
