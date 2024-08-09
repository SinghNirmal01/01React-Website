import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import { RouterProvider , createBrowserRouter} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact"
import Layout from "./Layout.jsx"

const router = createBrowserRouter([{
  path:"/",
  element: <Layout />,
  children:[{
    path:"",
    element: <Home /> },{
      path:"about",
      element: <About /> },{
      path:"contact",
      element: <Contact /> }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
   <ErrorBoundary>
<RouterProvider router={router} />
    </ErrorBoundary>
);