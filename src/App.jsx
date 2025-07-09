import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import OurProperties from './Pages/OurProperties';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/our-properties' element={<OurProperties/>}></Route>
            <Route path='/contact-us' element={<Contact/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App