import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_TOKEN } from "../constants";
import { ApolloLink, split } from "apollo-boost";
import { getMainDefinition } from "apollo-utilities";
import { withClientState } from "apollo-link-state";

import resolvers from "./state/resolvers";
import defaults from "./state/default";

//-- cache strategy
const cache = new InMemoryCache();

//-- compile stateLink
const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
});

const backendOptions = {
  httpPort: 3002,
  wsPort: 4466,
  endpointSlug: "graphql",
  apolloHost: "localhost",
  httpGqlEndpoint: `http://localhost:3002/graphql`,
  wsGqlEndpoint: `ws://localhost:4466/graphql`,
};

//-- compile httpLink with auth middleware
const httpLink = new HttpLink({
  uri: backendOptions.httpGqlEndpoint,
});
const middleware_authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const authHeader = token ? `Bearer ${token}` : null;
  operation.setContext({
    headers: {
      authorization: authHeader,
    },
  });
  return forward(operation);
});
const httplinkWithAuth = middleware_authLink.concat(httpLink);

//-- split streams
const link = ApolloLink.from([
  stateLink,
  split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    // wsLink,
    httplinkWithAuth,
    httplinkWithAuth
  ),
]);

//-- build client
const client = new ApolloClient({
  link,
  cache,
});
export default client;
