import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from '../Main/Main'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contactform from '../Contactform/Contactform'

function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Main/>}> </Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contactform' element={<Contactform/>}></Route>
        </Routes>
    </>
  )
}

export default Routing