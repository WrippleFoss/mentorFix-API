import { GraphQLObjectType } from 'graphql';
import AddMentor from './mentor/addMentor';
import AddMentee from './mentee/addMentee';

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addMentor: AddMentor,
    addMentee: AddMentee
  }
});

export default rootMutation;
