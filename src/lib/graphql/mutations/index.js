import { GraphQLObjectType } from 'graphql';
import AddMentor from './mentor/addMentor';
import AddMentee from './mentee/addMentee';
import UpdateMentee from './mentee/updateMentee';
import UpdateMentor from './mentor/updateMentor';

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addMentor: AddMentor,
    addMentee: AddMentee,
    updateMentee: UpdateMentee,
    updateMentor: UpdateMentor
  }
});

export default rootMutation;
