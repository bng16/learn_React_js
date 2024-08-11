import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  errorElement: <NotFound/>,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/about",
    element:<About />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
