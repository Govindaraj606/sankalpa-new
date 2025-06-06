import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [showDoctors, setShowDoctors] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const toggleDoctors = () => setShowDoctors(!showDoctors);
    const closeDoctors = () => setShowDoctors(false);



    const doctors = [
        {
            name: 'Dr. N.A. Jagadish',
            title: 'Senior Consultant Dermatologist',
            img: assets.doctorimg,
            link: '/doctor/dr-jagadish',
        },
        {
            name: 'Dr. Sridutt Shekar',
            title: 'Consultant ENT Surgeon',
            img: assets.medical,
            link: '/doctor/dr-sridutt',
        },
    ];


    return (
        <div>
            <div className='nav-bar'>
                <div className=''>
                    <img className='logo' src={assets.logo} alt="" />
                </div>

                <div className='list'>
                    <Link className='link' to={"/"}><div className='li' onClick={closeDoctors}>Home</div></Link>
                    <div className="nav-item" onClick={toggleDoctors}>
                        Doctor
                        {showDoctors && (
                            <div className="doctor-dropdown">
                                {doctors.map((doc, index) => (
                                    <Link to={doc.link} key={index} className="nav-card" onClick={closeDoctors}>
                                        <img src={doc.img} alt={doc.name} className="doc-img" />
                                        <div >
                                            <div className='name'>{doc.name}</div>
                                            <div className='title'>{doc.title}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link className='link' to={"/Contact"}><div className='li' onClick={closeDoctors}>Contact Us</div></Link>
                </div>
            </div>
            {/* mobile Menu */}
            <div className='navbar-res'>
                <div className='navbar-header'>
                    <img className='logo-resp' src={assets.logoresp} alt="" />
                    <div className='navbar-img' onClick={() => {
                        setIsOpen(!isOpen)
                        // console.log(isOpen)
                    }}>
                        <img src={assets.navbar} alt="" />
                    </div>
                </div>
                <div
                    className='nav-list-resp'
                    style={isOpen ? { transform: 'translateX(-1000px)' } : { transform: 'translateX(0)' , transition: 'transform 1.5s ease-in-out'}}
                >
                    <Link className='link' to={'/'} ><div>Home</div></Link>
                    <Link className='link' to={'/doctor/dr-jagadish'}><div>Doctor</div></Link>
                    <Link className='link' to={'/Contact'}><div>Contact</div></Link>

                </div>
            </div>

        </div>
    )
}

export default Navbar