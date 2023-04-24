import { useState } from 'react'
import Login from './views/login'
import Create from './views/create';
import Home from './views/home';
import IDE from './views/ide';
import Report from './views/report';
import TestBeds from './views/testbeds';
import Root from './views/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VbsnList from './views/vbsn';
import Database from './views/database';

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
    path: "/", 
    element: <Root/>,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/ide",
        element: <IDE />
      },
      {
        path: "/vbsns",
        element: <VbsnList />
      },
      {
        path: "/database",
        element: <Database />
      },
      {
        path: "/report",
        element: <Report />
      },
      {
        path: "/testbeds", 
        element: <TestBeds />
      }
    ]
  },
  
]);

function App() {
  return (
    <div className='flex flex-col h-screen '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
