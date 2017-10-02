import App from './components/App.jsx';

import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';
import NotFound from './pages/NotFound.jsx';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        exact: true,
        component: Home
      },
      { path: '/test',
        exact: true,
        component: Test
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
