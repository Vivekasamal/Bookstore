import React from 'react'
import Navbar from '../Components/Navbar'
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <>
    <Navbar />

    <div className='min-h-screen '>
    <Contactus />
    </div>
   
    <Footer />
    
    
    </>
  )
}

export default Contact