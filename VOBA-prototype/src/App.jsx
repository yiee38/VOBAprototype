import { useState } from 'react'
import Login from './views/login'
import Create from './views/create';
import Home from './views/home';
import IDE from './views/ide';
import Report from './views/report';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <Create />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/ide",
    element: <IDE />
  },
  {
    path: "/report",
    element: <Report />
  }
]);

function App() {
  return (
    <div className='flex flex-col h-screen '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
