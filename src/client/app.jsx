import React from 'react';
import ReactDOM from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { CookiesProvider } from 'react-cookie';

import ScrollToTop from './components/ScrollToTop.jsx';
import routes from './routes';


// This is the client-side Router/App
const AppRouter = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop>
          {renderRoutes(routes)}
        </ScrollToTop>
      </BrowserRouter>
    </CookiesProvider>
  )
}

// Injecting our App into the DOM
ReactDOM.render(
  <AppRouter />,
  document.querySelector('#app')
);
