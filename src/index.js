import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, Client } from 'urql';
import Home from './home';

/*
-------------
GraphQL Server Available Here:
https://launchpad.graphql.com/109v7knjk9
-------------
*/
const client = new Client({
  url: 'https://109v7knjk9.lp.gql.zone/graphql',
});

export const App = () => (
  <Provider client={client}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
