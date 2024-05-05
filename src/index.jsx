import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'  
import Dogs from './pages/Dogs'
import DogProfile from './pages/DogProfile'
import './index.css'
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogprofile/:breed" element={<DogProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   <App />
)
