import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Premiumbooks from '../components/Premiumbooks'

function Course() {

  return (
    <>
        <Header/>
        <div className='min-h-sceen'>
              <Premiumbooks/>
        </div>
        <Footer/>
    </>
  )
}

export default Course