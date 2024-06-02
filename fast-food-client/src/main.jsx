import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Private from './private/Private.jsx';
import Dashboard from './components/Dashboard.jsx';
import Contact from './components/Contact.jsx';
import AdminLogIn from './adminComponents/AdminLogIn.jsx';
import AdminDashboard from './adminComponents/AdminDashboard.jsx';
import Order from './components/Order.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/foodData'),
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/dashboard',
        element:<Private><Dashboard></Dashboard></Private>,
        loader:()=>fetch('http://localhost:5000/foodData'),
      },
      {
        path:'/foodData/:id',
        element:<Private><Order></Order></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/foodData/${params.id}`)
      }
    ]
  },
  {
    path:"/adminlogin",
    element:<AdminLogIn></AdminLogIn>
  },
  {
    path:'/adminDashboard',
    element:<AdminDashboard></AdminDashboard> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} /> 
   </AuthProvider>
  </React.StrictMode>,
)
