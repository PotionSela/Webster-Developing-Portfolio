import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import About from '../src/components/pages/About.jsx'
import Contact from '../src/components/pages/Contact.jsx'
import Portfolio from '../src/components/pages/Portfolio.jsx'
import Resume from '../src/components/pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path:'/contact',
        index: true,
        element: <Contact />,
      },
      {
        path:'/portfolio',
        index: true,
        element: <Portfolio />,
      },
      {
        path:'/resume',
        index: true,
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
