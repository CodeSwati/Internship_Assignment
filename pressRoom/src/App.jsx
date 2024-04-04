import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PressRelease from './components/PressRelease'
import InNews from './components/InNews'
import Social from './components/Social'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className='m-[1rem] md:m-[3rem] lg:m-[7rem] font-sans'>
       <Navbar/>
       <Main/>
       <PressRelease/>
       <InNews/>
       <Social/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
