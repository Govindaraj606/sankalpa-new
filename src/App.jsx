import React, { useEffect } from 'react'
import Homepage from './Homepage/Homepage'
import Footer from './footer/Footer'
import Navbar from './nav-bar/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sridutt from './pages/Sridutt/Sridutt'
import Jagadish from './pages/Jagadish/Jagadish'
import Contact from './Contact/Contact'
import Entpart from './ent-part/ENTpart'



const App = () => {

  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }), [pathname]

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dr-jagadish-dermatologist-bangalore' element={<Jagadish />} />
        <Route path='/dr-sridutt-ent-surgeon-bangalore' element={<Sridutt />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App