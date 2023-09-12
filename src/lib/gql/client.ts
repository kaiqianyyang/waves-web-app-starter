import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_BASE_URL,
});

const authLink = setContext((_, { header }) => {
  return {
    headers: {
      ...header,
      authorization: localStorage.getItem('access_token')
        ? `Bearer ${localStorage.getItem('access_token')}`
        : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: import.meta.env.VITE_APP_BASE_URL,
  cache: new InMemoryCache(),
});

export { client };
