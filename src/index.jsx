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
import Dogs, { loader as dogsLoader } from './pages/Dogs'
import DogProfile, {loader as dogProfileLoader }from './pages/DogProfile'
import './index.css'
import Layout from "./components/Layout"
import NotFound from "./pages/NotFound"
import Error from "./components/Error"
import Quiz, { loader as quizLoader } from "./pages/Quiz"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route 
        index 
        element={<Home />} />
      <Route 
        path="about" 
        element={<About />} />
      <Route 
        path="dogs" 
        element={<Dogs />} 
        errorElement={<Error />}
        loader={dogsLoader} />
      <Route 
        path="dogs/:type" 
        element={<DogProfile />} 
        errorElement={<Error />}
        loader={dogProfileLoader} />
      <Route 
        path="quiz" 
        element={<Quiz />} 
        errorElement={<Error />}
        loader={quizLoader} />
      <Route 
        path="*" 
        element={<NotFound />} />
    </Route>
))
    
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  render(
   <App />
)
