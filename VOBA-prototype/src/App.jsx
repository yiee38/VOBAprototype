import { useState } from 'react'
import Login from './views/login'
import Create from './views/create';
import Home from './views/home';
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
