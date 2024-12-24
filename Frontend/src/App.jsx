import React from 'react'
import Home from './Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Contact/Contact'
const App = () => {
  return (
<>
<div>

<Routes >
  <Route path="/" element ={<Home/>} />
  <Route path="/Course" element ={<Courses/>} />
  <Route path="/Signup" element ={<Signup/>} />
  <Route path='/Contactus' element ={<Contact/>} />
</Routes>
</div>

</>
    
  )
}

export default App
