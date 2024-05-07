import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar2 from './components/navbar2'
import About from './components/About'
import Products from './components/Products'
import Cart from './components/Cart'
import EarthCanvas from './components/canvas/Earth'
import Starfield from 'react-starfield';


function App() {
 

  return (
    <>
    <BrowserRouter>
      <div className="Navbar mb-10  " >

      <Navbar2 />
      </div>
      <div className="static ">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className="">
      <EarthCanvas  />
      </div>
      <h1 className="text-3xl font-bold  text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        trade with ease across the globe
      </h1>
    </div>
      
     
     <Products />
     <About />
     
    </BrowserRouter>
     
    </>
  )
}

export default App
