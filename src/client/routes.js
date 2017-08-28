import App from './components/App.jsx';
import Home from './Pages/Home.jsx';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      }
    ]
  }
];

export default routes;
