const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt
} = require('graphql');

const LoginType = new GraphQLObjectType({
  name: 'LoginType',
  fields: () => ({
    userId: { type: GraphQLID },
    token: { type: GraphQLString },
    tokenExpiration: { type: GraphQLInt },
    userRole: { type: GraphQLString}
  })
});

module.exports = LoginType;
