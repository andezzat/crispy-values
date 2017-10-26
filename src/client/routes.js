import App from './components/App.jsx';

import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

// React Router routes
// These are used in the index.jsx server-side route
// All pages routes must exist here
const routes = [
  { component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/test',
        component: Test
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
