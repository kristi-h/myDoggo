import React from 'react'
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements,
  Route
} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'  
import Dogs from './pages/Dogs'
import DogProfile from './pages/DogProfile'
import './index.css'
import Layout from "./components/Layout"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="dogs/:type" element={<DogProfile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
))
    
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   <App />
)
