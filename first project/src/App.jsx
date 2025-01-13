import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'
import Navbar from './navbar'


function Page() {
  return (
    <>
      <Navbar/>
      <MainContent/>
    </>
  )
}

export default Page;
