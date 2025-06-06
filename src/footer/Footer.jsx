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
                        <div className='botton-heading underline-1'>< img className='bottom-logo' src={assets.logoresp} alt="" />SANKALPA CLINIC</div>
                        <div className='location'><img src={assets.location} alt="" /> 15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                        <a href="tel:+91 98440 05600"><div className='phone'><img src={assets.phone} alt="" />099459 94257 / 9735121129</div></a>
                        <a href="mailto:contact@sankalpaclinic.com"><div className='mail'><img src={assets.mail} alt="" /> sriduttshekar@gmail.com</div></a>
                    </div>
                </div>

                <div className='bottom-list  right-line left-line'>
                    <Link className='link' to={'/'}> <div className='ml'>Home</div></Link>
                    <Link className='link' to={''}><div className='ml'>Doctor</div></Link>
                    <Link className='link' to={'/Contact'}><div className='ml'>Contact</div></Link>
                    <div className='underline-2'></div>
                </div>

                <div className='box-2'>
                    <div className='box-2-1'>
                        <div className='box-2-heading'>Sankalpa Clinic is a dual-specialty clinic in Vijayanagar offering trusted care in ENT and Dermatology, led by experienced consultants in a calm and patient-friendly space.</div>
                        <Link to={'/Contact'}> <button className='box-2-btn'>Contact Us <img src={assets.arrow} alt="" /></button></Link>
                    </div>

                    <div className='icons-part pl '>
                        <div className='conditions'>
                            <div className='style'>© 2025 Sankalpa Clinic</div>
                            <div className='style'> Privacy</div>
                            <div className='style'> Terms</div>
                        </div>

                        <div className='icon-imgs '>
                            <a href=""> <img src={assets.xicon} alt="" /></a>
                            <a href=""><img src={assets.facebookicon} alt="" /></a>
                            <a href=""> <img src={assets.linkedin} alt="" /></a>
                            <a href=""><img src={assets.youtube} alt="" /></a>
                        </div>
                    </div>

                </div>
            </div>
            {/* Mobile  */}

            <div className='mobile-footer'>
                <div className='mobileunderline logo-part'>
                    <img className='bottom-logo' src={assets.logoresp} alt="" />
                    <div>SANKALPA CLINIC</div>
                </div>
                <div className='footer-part1'>

                    <div className='flex'>
                        <img src={assets.location} alt="" />
                        <div className='mobile-para'>15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                    </div>
                    <div className='flex'>
                        <img src={assets.phone} alt="" />
                        <a href="tel:+91 98440 05600"><div className='mobile-para'>099459 94257 / 9735121129</div></a>
                    </div>

                    <div className='flex '>
                        <img src={assets.mail} alt="" />
                        <a href="mailto:contact@sankalpaclinic.com"><div className='mobile-para'>sriduttshekar@gmail.com</div></a>
                    </div>

                    <div className='foot-part2'>
                        <div className='bottom-list'>
                            <Link className='link' to={'/'}><div>Home</div></Link>
                            <Link className='link' to={''}> <div>Doctor</div></Link>
                            <Link className='link' to={'/Contact'}><div>Contact</div></Link>
                        </div>

                        <div>
                            <div className='mobile-icon'>
                                <a href=""> <img src={assets.xicon} alt="" /></a>
                                <a href=""><img src={assets.facebookicon} alt="" /></a>
                                <a href=""> <img src={assets.linkedin} alt="" /></a>
                                <a href=""><img src={assets.youtube} alt="" /></a>
                            </div>

                            <div className='box-2-mobile-h'>Sankalpa Clinic is a dual-specialty clinic in Vijayanagar offering trusted care in ENT and Dermatology, led by experienced consultants in a calm and patient-friendly space.</div>
                            <Link to={'/Contact'}> <button className='box-2-btn'>Contact Us <img src={assets.arrow} alt="" /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer