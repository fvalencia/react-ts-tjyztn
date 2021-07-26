import React, { Component } from 'react';
import { render } from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

import Layout from './src/app/core/Layout';
import UserPage from './src/app/user/UserPage';
import './style.css';

const enchancedFetch = (url, init) => {
  console.log(url);
  return fetch(url, {
    ...init,
    headers: {
      ...init.headers,
      'Access-Control-Allow-Origin': '*'
    }
  }).then(response => response);
};

const client = new ApolloClient({
  uri: 'https://0m71w.sse.codesandbox.io/',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors'
  }
});

function App() {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
}

render(
  <ApolloProvider client={client}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
