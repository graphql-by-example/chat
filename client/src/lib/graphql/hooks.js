import { useMutation, useQuery } from '@apollo/client';
import { addMessageMutation, messagesQuery } from './queries';

export function useAddMessage() {
  const [mutate] = useMutation(addMessageMutation);

  const addMessage = async (text) => {
    const { data: { message } } = await mutate({
      variables: { text },
    });
    return message;
  };

  return { addMessage };
}

export function useMessages() {
  const { data } = useQuery(messagesQuery);
  return {
    messages: data?.messages ?? [],
  };
}
