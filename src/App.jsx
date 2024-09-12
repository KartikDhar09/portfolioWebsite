import React from 'react'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About'

function App() {

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      
      <Route path='/' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Route>

  )
)

  return (
<RouterProvider router={router}/>
)
}

export default App