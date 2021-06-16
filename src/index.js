// imported modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/index.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

// apollo client
import { ApolloProvider } from '@apollo/client/react';
import apolloClient from './graphql/apolloClient';

// react redux
import { Provider } from 'react-redux';
import store from './redux/store';

// render DOM
ReactDOM.render(
   <React.StrictMode>
      <ApolloProvider client={apolloClient}>
         <Provider store={store}>
            <App />
         </Provider>
      </ApolloProvider>
   </React.StrictMode>,
   document.getElementById('root')
);