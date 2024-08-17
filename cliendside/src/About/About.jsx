import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBody from '../components/AboutBody'

function About() {
  return (
    <>
        <Header/>
        <div className='min-h-screen'>
            <AboutBody/>
        </div>
        <Footer/>
    </>
  )
}

export default About