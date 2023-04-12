import { GraphQLError } from 'graphql';
import { createMessage, getMessages } from './db/messages.js';

export const resolvers = {
  Query: {
    messages: (_root, _args, { user }) => {
      if (!user) throw unauthorizedError();
      return getMessages();
    },
  },

  Mutation: {
    addMessage: (_root, { text }, { user }) => {
      if (!user) throw unauthorizedError();
      return createMessage(user, text);
    },
  },
};

function unauthorizedError() {
  return new GraphQLError('Not authenticated', {
    extensions: { code: 'UNAUTHORIZED' },
  });
}
