import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './App.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ToastContainer position="top-right" />
    <RouterProvider router={router}/>
  </AuthProvider>

)
