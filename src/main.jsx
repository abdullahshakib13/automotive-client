import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Root from './layouts/Root.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './errorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('https://automotive-server-fre82u6n1-abdullah-shakibs-projects.vercel.app/product'),
        loader:()=>fetch('/brandName.json')
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`https://automotive-server-fre82u6n1-abdullah-shakibs-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
