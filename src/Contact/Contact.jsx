import React, { useEffect, useState } from 'react'
import styles from './Contact.module.css'
import { assets } from '../assets/assets'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser"
import { init } from "@emailjs/browser"
import { style } from 'framer-motion/client';
import { Helmet } from 'react-helmet';

const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        init("f7E7AKcXg_PXLji7T"); // Initialize once
    }, []);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        emailjs.send(
            "service_vktzxwj",
            "template_s41mo2p",
            data
        )
            .then(() => {
                toast.success("Email sent successfully!");
                reset();
            })
            .catch(() => {
                toast.error("Failed to send email");
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className={styles.maindiv}>


            <Helmet>
                <title>Contact Sankalpa Clinic – Vijayanagar, Bangalore</title>
                <meta name="description" content="Book an appointment or reach out for ENT or skin care services at Sankalpa Clinic in RPC Layout, Vijayanagar." />
                <meta
                    name="keywords"
                    content="dear cleaning near me, strep throat, ear cleaning, ear doctor, sore throat treatment, itchy ears, severe sore throat, ear care, dry throat, ear bone, grey hair, pigmentation, dermatologist, skin tag removal, skin whitening treatment, laser treatment for face, pigmentation on face, skin pigmentation, pimple removal, skin fairness treatment, face tan removal, best dermatologist near me, Sankalpa Clinic dermatology vijay nagar, Sankalpa Clinic skin specialist bangalore, hair loss treatment at Sankalpa Clinic, pimple treatment Sankalpa Clinic, laser treatment for face Sankalpa Clinic, book appointment Sankalpa Clinic dermatologist, Sankalpa Clinic for pigmentation treatment, skin whitening Sankalpa Clinic vijay nagar, Sankalpa Clinic reviews, best ear doctor in vijay nagar, best clinic for ear cleaning near me, best doctor for tonsillectomy in bangalore, best severe sore throat treatment vijay nagar, best clinic for throat stones removal near me, best ent doctor for polyps in nose vijay nagar, best tonsillitis treatment doctor in vijay nagar, best ear doctor for hearing loss near me, best ent allergy clinic in vijay nagar, best doctor for strep throat in vijay nagar" />
            </Helmet>


            <div className={styles.full}>
                <div className={styles.card_1}>
                    <div className={styles.info}>
                        <div className={styles.card1_heading}>Clinic Address</div>
                        <div className={styles.flex}>
                            <img src={assets.mapaddressbook} alt="ear cleaning near vijay nagar bangalore" />
                            <div className={styles.para}>15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                        </div>

                        <div className={styles.flex}>
                            <img src={assets.mapcall} alt="ent clinic in vijay nagar bangalore" />
                            <a href="tel:099459 94257 / 9735121129"><div className={styles.para}>099459 94257 / 9735121129</div></a>
                        </div>
                        <div className={styles.flex}>
                            <img src={assets.mapmail} alt="best ent allergy clinic in vijay nagar" />
                            <a href="mailto:sriduttshekar@gmail.com"><div className={styles.para}>sriduttshekar@gmail.com</div></a>
                        </div>
                        <div className={styles.card1_heading}>Timings</div>
                        <div className={styles.flex}>
                            <img src={assets.maphair} alt="best doctor for strep throat in vijay nagar" />
                            <div className={styles.para}>Dermatology Consultation: Monday to Saturday: 10 AM - 4 PM</div>
                        </div>
                        <div className={styles.flex}>
                            <img src={assets.maprounded} alt="best ent specialist for ear care in bangalore" />
                            <div className={styles.para}>ENT Consultation: Monday to Saturday: 4 PM - 7 PM</div>
                        </div>
                        <div className={styles.m_l} >
                            <div className={styles.para}>Sunday: Closed</div>
                        </div>
                    </div>
                </div>

                <div className={styles.card_2}>
                    <div className={styles.form_part}>
                        <div className={styles.form_heading}>
                            <div className={styles.card2_main_heading}>Get in Touch</div>
                            <div className={styles.card2_sub_heading}>Have a question or need to book an appointment?</div>
                            <div className={styles.card2_para}>We’re just a call or message away. Reach out to connect with our ENT or Dermatology specialists - we’re here to help, every step of the way.</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.flex_1}>
                                <input {...register("name", { required: true })} className={styles.name} type="text" placeholder='Name*' />
                                {errors.name && <span className={styles.alert_msg} >Name is required</span>}
                            </div>
                            <div className={styles.flex_1}>
                                <input   {...register("contact", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit phone number"
                                    }
                                })} className={styles.phone} type="tel" inputMode="numeric" maxLength={10} placeholder='Contact no*' />
                                {errors.contact && <span className={styles.alert_msg}>{errors.contact.message || 'Phone number is required'}</span>}
                            </div>
                            <div className={styles.flex_1}>
                                <textarea {...register("message", { required: true })} className={styles.msg} placeholder='Message'></textarea>
                                {errors.message && <span className={styles.alert_msg}>message is required</span>}
                            </div>
                            <button type='submit' className={styles.form_btn} disabled={isSubmitting}>Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.map}>
                <div className={styles.map_heading}>Clinic Location</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0615812992255!2d77.54490799999999!3d12.967911299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa02749f92c2f1247%3A0xb185216e1fad1d41!2sSankalpa%20Skin%20%26%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1750742222033!5m2!1sen!2sin"
                    width="1040px;"
                    height="299px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Contact