import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PressRelease from './components/PressRelease'

function App() {
 

  return (
    <div className='m-[5rem] font-sans'>
       <Navbar/>
       <Main/>
       <PressRelease/>
    </div>
  )
}

export default App
