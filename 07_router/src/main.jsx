import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Sidebar from './components/sidebar';

// Create a layout route that includes Sidebar and Outlet
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />, // Sidebar as the layout component
    children: [
      {
        path: "/sidebar/profile/:profileId", // Nested route under Sidebar
        element: <Profile />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
