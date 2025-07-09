import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import OurProperties from './Pages/OurProperties';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/our-properties' element={<OurProperties/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App