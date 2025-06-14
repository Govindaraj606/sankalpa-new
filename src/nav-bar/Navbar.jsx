import React from 'react'
import styles from './Navbar.module.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [showDoctors, setShowDoctors] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const toggleDoctors = () => setShowDoctors(!showDoctors);
    const closeDoctors = () => {
        setShowDoctors(false);
        setIsOpen(true)
    }

    const handleLinkClick = () => {
        setIsOpen(true);
    };




    const doctors = [
        {
            name: 'Dr. N.A. Jagadish',
            title: 'Senior Consultant Dermatologist',
            img: assets.doctorimg,
            link: '/dermatologist-vijayanagar-dr-n-a-jagadish',
            alt:"best doctor for strep throat in vijay nagar"
        },
        {
            name: 'Dr. Sridutt Shekar',
            title: 'Consultant ENT Surgeon',
            img: assets.medical,
            link: '/ent-specialist-vijayanagar-dr-sridutt-shekar',
            alt:"best ent specialist for ear care in bangalore"
        },
    ];


    return (
        <div>
            <div className={styles.nav_bar}>
                <div className=''>
                    <img className={styles.logo} src={assets.logo} alt="best tonsillitis treatment doctor in vijay nagar" />
                </div>

                <div className={styles.list}>
                    <Link className={styles.link} to={"/"}><div className={styles.li} onClick={closeDoctors}>Home</div></Link>
                    <div className={styles.nav_item} onClick={toggleDoctors}>
                        Doctor
                        {showDoctors && (
                            <div className={styles.doctor_dropdown}>
                                {doctors.map((doc, index) => (
                                    <Link to={doc.link} key={index} className={styles.nav_card} onClick={closeDoctors}>
                                        <img src={doc.img} alt={doc.name} className={styles.doc_img} />
                                        <div >
                                            <div className={styles.name}>{doc.name}</div>
                                            <div className={styles.title}>{doc.title}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link className={styles.link} to={"/contact-ent-dermatology-clinic-vijayanagar"}><div className={styles.li} onClick={closeDoctors}>Contact Us</div></Link>
                </div>
            </div>



            {/* mobile Menu */}
            <div className={styles.navbar_res}>
                <div className={styles.navbar_header}>
                    <img className={styles.logo_resp} src={assets.logoresp} alt="best ear doctor for hearing loss near me" />
                    <div className={styles.navbar_img} onClick={() => {
                        setIsOpen(!isOpen)
                        // console.log(isOpen)
                    }}>
                        <img src={assets.navbar} alt="best ent allergy clinic in vijay nagar" />
                    </div>
                </div>
                <div
                    className={styles.nav_list_resp}
                    style={isOpen ? { transform: 'translateY(-1000px)' } : { transform: 'translateY(0)' }}
                >
                    <Link className={styles.link} to={'/'} onClick={handleLinkClick} ><div>Home</div></Link>

                    <div className={styles.mobile_nav_item} onClick={toggleDoctors}>
                        Doctor
                        {showDoctors && (
                            <div className={styles.doctor_dropdown}>
                                {doctors.map((doc, index) => (
                                    <Link to={doc.link} key={index} className={styles.nav_card} onClick={closeDoctors}>
                                        {/* <img src={doc.img} alt={doc.name} className="doc-img" /> */}
                                        <div >
                                            <div className={styles.name}>{doc.name}</div>
                                            <div className={styles.title}>{doc.title}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link className={styles.link} to={'/contact-ent-dermatology-clinic-vijayanagar'} onClick={handleLinkClick}><div>Contact</div></Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar