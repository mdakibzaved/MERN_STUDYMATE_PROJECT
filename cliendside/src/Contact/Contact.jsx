import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactBody from '../components/ContactBody'


function Contact() {
  return (
    <>
        <Header/>
        <div className='min-h-screen'>
            <ContactBody/>
        </div>
        <Footer/>
    </>
  )
}

export default Contact