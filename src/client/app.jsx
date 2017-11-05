import React from 'react';
import ReactDOM from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { CookiesProvider } from 'react-cookie';

import routes from './routes';


// This is the client-side Router/App
const AppRouter = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </CookiesProvider>
  )
}

// Injecting our App into the DOM
ReactDOM.render(
  <AppRouter />,
  document.querySelector('#app')
);
