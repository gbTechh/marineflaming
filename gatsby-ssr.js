/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */


// You can delete this file if you're not using it
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apolloClient';
import Provider from './uixlibrary/context/provider';
import Uix from './uixlibrary/Uix.jsx';


export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={ client }>
    <Provider>
      <Uix>      
        { element }   
      </Uix>
    </Provider>
  </ApolloProvider>
  );
}
