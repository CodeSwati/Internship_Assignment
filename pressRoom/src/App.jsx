import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PressRelease from './components/PressRelease'
import InNews from './components/InNews'
import Social from './components/Social'

function App() {
 

  return (
    <div className='m-[5rem] font-sans'>
       <Navbar/>
       <Main/>
       <PressRelease/>
       <InNews/>
       <Social/>
    </div>
  )
}

export default App
