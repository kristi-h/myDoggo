import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Dogs from './pages/Dogs'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#myBestFriend</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/dogs">Dogs</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   <App />
)
