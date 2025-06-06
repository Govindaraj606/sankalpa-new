import React from 'react'
import Homepage from './Homepage/Homepage'
import Footer from './footer/Footer'
import Navbar from './nav-bar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sridutt from './pages/Sridutt/Sridutt'
import Jagadish from './pages/Jagadish/Jagadish'
import Contact from './Contact/Contact'
import CardAnimation from './pages/CardAnimation/CardAnimation'
import Entpart from './ent-part/ENTpart'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/doctor/dr-jagadish' element={<Jagadish />} />
          <Route path='/doctor/dr-sridutt' element={<Sridutt/>}/>
          <Route path='/Contact' element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App