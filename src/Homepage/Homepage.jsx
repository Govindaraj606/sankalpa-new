import React, { useEffect, useRef, useState } from 'react'
import './Homepage.css'
import { assets } from '../assets/assets'
import { useForm } from "react-hook-form";
import Footer from '../footer/Footer';
import Navbar from '../nav-bar/Navbar';
import Testimonial from '../testimonial/Testimonial';
import { Link, useActionData } from 'react-router-dom';

const Homepage = () => {

    const knowMore = useRef(null)

    const scrollToForm = () => {
        knowMore.current?.scrollIntoView({ behavior: 'smooth' });
    };


    // const showRef = useRef()
    const [isShow, setIsShow] = useState([false, false]);

    const showCard = (index) => {
        const newShow = [...isShow];
        newShow[index] = !newShow[index];
        setIsShow(newShow);
        // console.log(isShow)
    };


    // frame card Animation
    const imgs = [
        assets.repairing,
        assets.framhead
    ]

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setIndex(prev =>(prev + 1) % imgs.length);
                setFade(true);
            },400)
        },2000)

        return()=>clearInterval(interval);
    },[])




    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset();
        alert("Form submitted successfully!")
    }





    return (
        <div className='full'>
            {/* Banner part */}
            <div >
                <div>
                    <img className='banner-img' src={assets.bannerimg} alt="" />
                    <img className='banner-resp' src={assets.bannerresp} alt="" />
                </div>
                <div className='banner-part'>
                    <div className='heading-part'>
                        <div className='main-headding'>Set Your Sankalpa for a Healthier, Happier Life.</div>
                        <div className='sub-headding'>Expert ENT and Dermatology Care in Vijayanagar</div>

                        <div className='btn-part'>
                            <Link to={'/Contact'}><button className='btn-1'>Book Appointment</button></Link>
                            <button className='btn-2' onClick={scrollToForm}><img className='dot' src={assets.dot} alt="" />Know More</button>
                        </div>

                    </div>

                    <div className='doctor-img'>
                        <img className='doctorimg' src={assets.doctor} alt="" />
                        <img className='doctorimgresp' src={assets.doctorimgresp} alt="" />
                    </div>
                </div>
            </div>

            {/* About part */}

            <div className='content-part'>
                <div className='content-heading-part'>
                    <div className='content-main-heading'>ABOUT US</div>
                    <div className='content-sub-heading' ref={knowMore}>Sankalpa Clinic - A therapeutic place for skin, hair and ENT care.</div>

                    <div className='content-para-part'>
                        <div className='content-part-1'>
                            <div className='content-para'>Established in 2022, Sankalpa Clinic is a dual-specialty clinic in RPC Layout, Vijayanagar, offering focused care in ENT and Dermatology. Built with the vision of delivering accessible and affordable healthcare, the clinic combines clinical expertise with a calm, supportive environment. Led by Dr. N.A. Jagadish (Senior Consultant Dermatologist) and Dr. Sridutt Shekar (Consultant ENT Surgeon), Sankalpa Clinic is known for its personalised approach, consistent outcomes and commitment to long-term well-being.</div>
                            <div className='frame-imgs'>
                                <div className='frame'>
                                    <img className='frame-img' src={assets.frame1} alt="" />
                                    <div className='frame-content'>
                                        <img className='frame-icons' src={assets.medicine} alt="" />
                                        <div className='number'>8000+</div>
                                        <div className='frame-title '>Happy Patients</div>
                                    </div>
                                </div>
                                <div className='frame'>
                                    <img className='frame-img' src={assets.frame2} alt="" />
                                    <div className='frame-content'>
                                        <img className='frame-icons' src={assets.agreement} alt="" />
                                        <div className='number'>20+</div>
                                        <div className='frame-title'>Years of Experience</div>
                                    </div>
                                </div>
                                <div className='frame'>
                                    <img className='frame-img' src={assets.frame3} alt="" />
                                    <div className='frame-content'>
                                        <img className={`repairing ${fade ? "fade-in" : "fade-out"}`}  src={imgs[index]} alt="" />
                                        <div className='number'>2</div>
                                        <div className='frame-title '>Specialties</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='about-img'>
                            <img className='group-img' src={assets.groupimg} alt="" />
                            <img className='group-resp' src={assets.groupresp} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            {/* services-part */}

            <div className='services-part'>
                <div className='service-heading'>What Defines Care at Sankalpa Clinic?</div>

                <div >
                    <div className='cards'>
                        <div className="card-4 card mt">
                            <img src={assets.icon4} alt="" className="card-4-img" />
                            <div className="heading">Service</div>
                            <div className="para">We believe in meaningful, personalised care - beyond just consultation. Every patient is treated with time, respect and focused attention.</div>
                        </div>

                        <div className="card-5 card mt">
                            <img src={assets.icon5} alt="" className="card-5-img" />
                            <div className="heading">Safety</div>
                            <div className="para">Hygiene, ethics and clinical precision guide every decision we make.
                                Your well-being is never compromised.</div>
                        </div>

                        <div className="card-3 card mt">
                            <img src={assets.icon2} alt="" className="card3-img" />
                            <div className="heading">Sensitivity</div>
                            <div className="para">We listen without rush, understand your concerns and respond with empathy.Your comfort; physical and emotional - is part of our care.</div>
                        </div>
                    </div>


                    <div>

                    </div>
                </div>
            </div>

            {/* doctors part */}

            <div className="doctors-part">
                <div className="doctor-heading">Our Expert Doctors</div>
                <div className='doctor-content' >
                    <div className='doctor-card'>
                        <img className="doctor-img-card" src={assets.cardimg1} alt="" />
                        <div className='doctor-deatils'>
                            <div className="doctor-name">Dr. N.A. Jagadish </div>
                            <div className='degree'>B.Sc, MBBS, D.V.D</div>
                            <div className="position">Senior Consultant Dermatologist</div>
                            <div className="year">Years of Experience: 41</div>
                            <Link to={'/doctor/dr-jagadish'}><button className="doctor-btn"><img className='dot-img' src={assets.dot} alt="" />Know More</button></Link>
                        </div>
                    </div>

                    <div className='doctor-card'>
                        <img className="doctor-img-card" src={assets.cardimg2} alt="" />
                        <div className='doctor-deatils'>
                            <div className="doctor-name">Dr. Sridutt Shekar </div>
                            <div className='degree'>MBBS, MS - ENT & Head and Neck Surgery</div>
                            <div className="position">Consultant ENT Surgeon</div>
                            <div className="year">Years of Experience: 10+</div>
                            <Link to={'/doctor/dr-sridutt'}><button className="doctor-btn"><img className='dot-img' src={assets.dot} alt="" />Know More</button></Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className='mobile-doctors-part'>
                <div className="doctor-heading">Our Expert Doctors</div>
                <div className='mobile-doctor-content' >
                    <div className='mobile-card'>
                        <div className='mobile-doctor-card' onClick={() => showCard(0)} style={{ height: isShow[0] ? "500px" : "280px" }} >
                            <img className="mobile-doctor-img-card" src={assets.cardimg1} alt="" />
                            <div className='mobile-doctor-deatils'>
                                <div className="mobile-doctor-name">Dr. N.A. Jagadish </div>
                                <div className='doctor-degree doctor-para'>B.Sc, MBBS, D.V.D</div>
                                <div className="doctor-position doctor-para">Senior Consultant Dermatologist</div>
                                <div className="doctor-year doctor-para">Years of Experience: 41</div>
                                <Link to={'/doctor/dr-jagadish'}><button className="mobile-doctor-btn"><img className='dot-img' src={assets.dot} alt="" />Know More</button></Link>
                            </div>
                        </div>

                        <div className='mobile-doctor-card' onClick={() => showCard(1)} style={{ height: isShow[1] ? "500px" : "280px" }}>
                            <img className="mobile-doctor-img-card" src={assets.cardimg2} alt="" />
                            <div className='mobile-doctor-deatils'>
                                <div className="mobile-doctor-name">Dr. Sridutt Shekar </div>
                                <div className='doctor-degree doctor-para'>MBBS, MS - ENT & Head and Neck Surgery</div>
                                <div className="doctor-position doctor-para">Consultant ENT Surgeon</div>
                                <div className="doctor-year doctor-para">Years of Experience: 10+</div>
                                <Link to={'/doctor/dr-sridutt'}><button className="mobile-doctor-btn"><img className='dot-img' src={assets.dot} alt="" />Know More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Testimonials-part */}

            {/* <div className="testimonial-part">
                <div className='testimonial-part-1'>
                    <div className="testimonial-heading">Testimonials</div>
                    <div className="textimonial-sub-heading">Our latest customer reviews</div>
                    <div className="testimonial-para"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</i> </div>
                </div>

                <div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                </div>
            </div> */}

            {/* contact-page*/}

            <div className="contact-part">

                <div className='info-part'>
                    <div className='info-part-1'>
                        <div className='box'></div>
                        <div className='form-part'>
                            <div className='form-part-1'>
                                <div className='form-heading'>Get in Touch</div>
                                <div className='form-sub-para font-para'>Have a question or need to book an appointment ?</div>
                                <div className='form-para'>We’re just a call or message away. Reach out to connect with our ENT or Dermatology specialists - we’re here to help, every step of the way.</div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=''>
                                    <input {...register("firstname", { required: true, pattern: /^[A-Za-z]+$/i })} className='input-name border input underline' type="text" placeholder='Name*' />
                                    {errors.firstname && <span className='alert-msg'>Name is required</span>}
                                </div>
                                <div className=''>
                                    <input  {...register("phonenumber", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Enter a valid 10-digit phone number"
                                        }
                                    })} className='input-contact border input underline' type="phone" inputMode="numeric" maxLength={10} placeholder='Contact no*' />
                                    {errors.phonenumber && <span className='alert-msg'>{errors.phonenumber.message || 'Phone number is required'}</span>}
                                </div>
                                <div className=''>
                                    <textarea {...register("message", { required: true })} className='msg border input underline' placeholder='Message'></textarea>
                                    {errors.message && <span className='alert-msg'>message is required</span>}
                                </div>
                                <button type='submit' className='form-btn'>Send</button>
                            </form>
                        </div>
                    </div>

                    <div className='info-part-1'>

                        <img className='ractangle-img' src={assets.ractangle} alt="" />
                        <img className='ractangle-resp' src={assets.ractangleresp} alt="" />

                        <div className='info'>
                            <div className='info-heading'>Clinic Address</div>
                            <div className='flex1'>
                                <img src={assets.addressbook} alt="" />
                                <div className='info-para height'> 15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                            </div>
                            <div className='flex1'>
                                <img src={assets.call} alt="" />
                                <a href="tel:099459 94257 / 9735121129"><div className='info-para height'> 099459 94257 / 9735121129</div></a>
                            </div>
                            <div className='flex1'>
                                <img src={assets.mail1} alt="" />
                                <a href="mailto:sriduttshekar@gmail.com"><div className='info-para height'> sriduttshekar@gmail.com</div></a>
                            </div>

                            <div className='info-heading'>Timings</div>
                            <div className='flex1'>
                                <img src={assets.hair} alt="" />
                                <div className='info-para width height'> Dermatology Consultation: Monday to Saturday: 10 AM - 4 PM</div>
                            </div>
                            <div className='flex1'>
                                <img src={assets.rounded} alt="" />
                                <div className='info-para height'> ENT Consultation: Monday to Saturday: 4 PM - 7 PM</div>
                            </div>
                            <div className='info-para m-l'>Sunday : Closed</div>

                        </div>
                        <div className='icons'>
                            <a href=""><img className='icon-imgs' src={assets.insta} alt="" /></a>
                            <a href=""> <img className='icon-imgs' src={assets.facebook} alt="" /></a>
                            <a href=""> <img className='icon-imgs' src={assets.x} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage