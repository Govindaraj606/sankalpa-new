import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='bottom-part'>
                <div>
                    <div className='box-1'>
                        <div className='botton-heading underline-1'>< img className='bottom-logo' src={assets.logoresp} alt="best ent doctor for sore throat treatment" />SANKALPA CLINIC</div>
                        <div className='location'><img src={assets.location} alt="best clinic for nasal allergies and congestion" /> 15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                        <a href="tel:099459 94257 / 9735121129"><div className='phone'><img src={assets.phone} alt="best treatment for tonsillitis and sore throat" />099459 94257 / 9735121129</div></a>
                        <a href="mailto:sriduttshekar@gmail.com"><div className='mail'><img src={assets.mail} alt="best ent for itchy ears and dry throat" /> sriduttshekar@gmail.com</div></a>
                    </div>
                </div>

                <div className='bottom-list  right-line left-line'>
                    <Link className='link' to={'/'}> <div className='ml'>Home</div></Link>
                    <Link className='link' to={'/dr-jagadish-dermatologist-bangalore'}><div className='ml'>Doctor</div></Link>
                    <Link className='link' to={'/contact'}><div className='ml'>Contact</div></Link>
                    <div className='underline-2'></div>
                </div>

                <div className='box-2'>
                    <div className='box-2-1'>
                        <div className='box-2-heading'>Sankalpa Clinic is a dual-specialty clinic in Vijayanagar offering trusted care in ENT and Dermatology, led by experienced consultants in a calm and patient-friendly space.</div>
                        <Link to={'/contact'}> <button className='box-2-btn'>Contact Us <img src={assets.arrow} alt="best treatment for tonsils inflammation" /></button></Link>
                    </div>

                    <div className='icons-part pl '>
                        <div className='conditions'>
                            <div className='style'>© 2025 Sankalpa Clinic</div>
                            <div className='style'> Privacy</div>
                            <div className='style'> Terms</div>
                        </div>

                        <div className='icon-imgs '>
                            <a href=""> <img src={assets.xicon} alt="best doctor for nasal congestion and stuffy nose" /></a>
                            <a href=""><img src={assets.facebookicon} alt="best ent clinic for hearing loss and ear care" /></a>
                            <a href=""> <img src={assets.linkedin} alt="best sore throat and tonsillitis treatment" /></a>
                            <a href=""><img src={assets.youtube} alt="best doctor for dry nose and nose allergy" /></a>
                        </div>
                    </div>

                </div>
            </div>
            {/* Mobile  */}

            <div className='mobile-footer'>
                <div className='mobileunderline logo-part'>
                    <img className='bottom-logo' src={assets.logoresp} alt="best treatment for polyps in nose" />
                    <div>SANKALPA CLINIC</div>
                </div>
                <div className='footer-part1'>

                    <div className='flex'>
                        <img src={assets.location} alt="best ent for itchy nose and itchy ears" />
                        <div className='mobile-para'>15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                    </div>
                    <div className='flex'>
                        <img src={assets.phone} alt="best doctor for nasal bone and swollen nose" />
                        <a href="tel:+91 98440 05600"><div className='mobile-para'>099459 94257 / 9735121129</div></a>
                    </div>

                    <div className='flex '>
                        <img src={assets.mail} alt="ent doctor for sore throat treatment" />
                        <a href="mailto:contact@sankalpaclinic.com"><div className='mobile-para'>sriduttshekar@gmail.com</div></a>
                    </div>

                    <div className='foot-part2'>
                        <div className='bottom-list'>
                            <Link className='link' to={'/'}><div>Home</div></Link>
                            <Link className='link' to={'/dr-jagadish-dermatologist-bangalore'}> <div>Doctor</div></Link>
                            <Link className='link' to={'/contact'}><div>Contact</div></Link>
                        </div>

                        <div>
                            <div className='mobile-icon'>
                                <a href=""> <img src={assets.xicon} alt="tonsillitis and sore throat treatment" /></a>
                                <a href=""><img src={assets.facebookicon} alt="best severe sore throat treatment vijay nagar" /></a>
                                <a href=""> <img src={assets.linkedin} alt="best ent clinic in vijay nagar bangalore" /></a>
                                <a href=""><img src={assets.youtube} alt="best ear doctor in vijay nagar" /></a>
                            </div>

                            <div className='box-2-mobile-h'>Sankalpa Clinic is a dual-specialty clinic in Vijayanagar offering trusted care in ENT and Dermatology, led by experienced consultants in a calm and patient-friendly space.</div>
                            <Link to={'/contact'}> <button className='box-2-btn'>Contact Us <img src={assets.arrow} alt="best ent doctor for polyps in nose vijay nagar" /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer