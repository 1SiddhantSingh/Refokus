import { useState } from 'react'
import './App.css'
import Navbar from './components/App/Navbar'
import Work from './components/App/Work'
import Stripes from './components/App/Stripes'
import Marquee from './components/App/Marquee'
import Blocks from './components/App/Blocks'
import Products from './components/App/Products'
import Footer from './components/App/Footer'

function App() {
  

  return (
    <div className=' w-full  bg-zinc-900  font-["satoshi"] text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquee />
      <Blocks />
      <Footer />

    </div>
  )
}

export default App
