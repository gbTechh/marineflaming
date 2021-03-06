import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://onepageboilerplategatsby.local/graphql",
    credentials: 'include',
    fetch,
  }),
  cache: new InMemoryCache(),
});
