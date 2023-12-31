import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, AuthProvider } from './contexts';
import { client } from './lib';
import { ApolloProvider } from '@apollo/client';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

// TODO: Please add your name in the App provider's author name prop

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider authorName='Cathy'>
          <AuthProvider>
            <App />
          </AuthProvider>
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
