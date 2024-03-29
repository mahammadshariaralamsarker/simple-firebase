import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componets/Main.jsx';
import Home from './Componets/Home.jsx';
import Login from './Componets/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
