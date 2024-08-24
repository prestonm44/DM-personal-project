import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Building } from './Components/Building.jsx'
import { AccessPoint } from './Components/AccessPoint.jsx'
import { User } from './Components/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Building />}>
      <Route path="/AccessPoints" element={<AccessPoint />} />
      <Route path="/Users" element={<User />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

