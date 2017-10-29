import express from 'express';
import request from 'request';

import React from 'react';
import { renderToString } from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { CookiesProvider } from 'react-cookie';

import routes from '../client/routes';

const router = express.Router();

// Creates a Server-side Static React Router that can be imported and used inside Express
router.get('*', (req, res) => {
  let context = {};
  const content = renderToString(
    <CookiesProvider cookies={req.universalCookies}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </CookiesProvider>
  );
  res.render('index', {title: 'Values Footprints', data: false, content});
});

module.exports = router;
