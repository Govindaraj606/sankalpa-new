import React from 'react'
import style from './DoctorPageBanner.module.css'
import { assets } from '../assets/assets'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { details } from 'framer-motion/client';

const DoctorPageBanner = ({ detail }) => {
    return (
        <>

            {/* mobile */}
            <div className={style.mobileRootContainer}>

                <div className={style.container}>
                    <div className={style.docName}>{detail.name}</div>
                    <div className={style.docQualiication}>{detail.Qualiication}</div>

                    <div className={style.box}>
                        <div className={style.expContainer}>
                            <img src={assets.consultantIcon} alt="" />
                            <div className={style.docExperience}>{detail.Experience}</div>
                        </div>

                        <div className={style.expContainer}>
                            <img src={assets.experienceIcon} alt="" />
                            <div className={style.docExperience}>{detail.year}</div>
                        </div>
                    </div>




                    <div className={style.buttonContainer}>
                        <Link to={'/contact'}><button className={style.appointmentButton}>
                            <div className={style.buttonBg1}>Book Consultation</div>
                            <div className={style.buttonBg2}><FaArrowRight className={style.rightArrow} /></div>
                        </button></Link>
                    </div>

                    <div className={style.docImage}>
                        <img src={detail.img} alt="" />
                    </div>

                </div>

            </div>

            {/* desktop */}

            <div className={style.desktopRootContainer}>
                <div className={style.container}>
                    <div className={style.docName}>{detail.name}</div>
                    <div className={style.docImage}>
                        <img src={detail.img} alt="" />
                    </div>
                </div>

                <div className={style.contentContainer}>

                    {/* top side */}
                    <div className={style.topSide}>
                        <div className={style.expContainer}>
                            <img src={assets.consultantIcon} alt="" />
                            <div className={style.docExperience}>{detail.Experience}</div>
                        </div>

                        <div className={style.expContainer}>
                            <img src={assets.experienceIcon} alt="" />
                            <div className={style.docExperience}>{detail.year}</div>
                        </div>
                    </div>

                    {/* bottom side */}
                    <div className={style.bottomSide}>
                        <div className={style.docQualiication}>{detail.Qualiication}</div>

                        <div className={style.buttonContainer}>
                           <Link to={'/contact'}> <button className={style.appointmentButton}>
                                <div className={style.buttonBg1}>Book Consultation</div>
                                <div className={style.buttonBg2}><FaArrowRight className={style.rightArrow} /></div>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorPageBanner
