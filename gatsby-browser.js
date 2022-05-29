import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apolloClient';

import Provider from './uixlibrary/context/provider';
import Uix from './uixlibrary/Uix.jsx';

export const wrapRootElement = ({ element }) => {
  console.log({element})
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