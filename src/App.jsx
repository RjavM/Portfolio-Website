import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Work } from './components/Work'
import { Resume } from './components/Resume'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
  </BrowserRouter>
}

export default App
