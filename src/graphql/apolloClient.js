// imported modules
import {
   ApolloClient,
   InMemoryCache,
   createHttpLink,
   split
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

// http link
const httpLink = createHttpLink({
   uri: 'https://eduargabriel7-community-server.herokuapp.com/graphql'
})

// web socket link
const wsLink = new WebSocketLink({
   uri: 'wss://eduargabriel7-community-server.herokuapp.com/graphql',
   options: {
      reconnect: true
   }
});

// split function
const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return (
         definition.kind === 'OperationDefinition' &&
         definition.operation === 'subscription'
      );
   },
   wsLink,
   httpLink,
);

// client
const apolloClient = new ApolloClient({
   link: splitLink,
   cache: new InMemoryCache()
})

// export module
export default apolloClient;