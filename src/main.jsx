import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from '/home/tripathi/newfolder/basicreact/07reactRouter/src/Layout.jsx'
import {Header,Footer,Home,About,Mission,Contact} from '/home/tripathi/newfolder/basicreact/07reactRouter/src/components/index.js'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="mission" element={<Mission/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
