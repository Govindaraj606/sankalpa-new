import React from 'react'
import styles from './Contact.module.css'
import { assets } from '../assets/assets'
import { useForm } from "react-hook-form";

const Contact = () => {

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
        <div className={styles.maindiv}>
            <div className={styles.full}>
                <div className={styles.card_1}>
                    <div className={styles.card1_heading}>Clinic Address</div>
                    <div className={styles.flex}>
                        <img src={assets.mapaddressbook} alt="" />
                        <div className={styles.para}>15, RPC Layout, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040</div>
                    </div>

                    <div className={styles.flex}>
                        <img src={assets.mapcall} alt="" />
                        <div className={styles.para}>099459 94257 / 9735121129</div>
                    </div>
                    <div className={styles.flex}>
                        <img src={assets.mapmail} alt="" />
                        <div className={styles.para}>sriduttshekar@gmail.com</div>
                    </div>
                    <div className={styles.card1_heading}>Timings</div>
                    <div className={styles.flex}>
                        <img src={assets.maphair} alt="" />
                        <div className={styles.para}>Dermatology Consultation: Monday to Saturday: 10 AM - 4 PM</div>
                    </div>
                    <div className={styles.flex}>
                        <img src={assets.maprounded} alt="" />
                        <div className={styles.para}>ENT Consultation: Monday to Saturday: 4 PM - 7 PM</div>
                    </div>
                    <div className={styles.m_l} >
                        <div className={styles.para}>Sunday: Closed</div>
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
                                <input {...register("phonenumber", { required: true })} className={styles.phone} type="phone" placeholder='Contact no*' />
                                {errors.name && <span className={styles.alert_msg}>phone number is required</span>}
                            </div>
                            <div className={styles.flex_1}>
                                <textarea {...register("message", { required: true })} className={styles.msg} placeholder='Message'></textarea>
                                {errors.message && <span className={styles.alert_msg}>message is required</span>}
                            </div>
                            <button type='submit' className={styles.form_btn}>Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.map}>
                <div className={styles.map_heading}>Clinic Location</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.062370637165!2d77.54236757484128!3d12.967860787347105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de3d4381d27%3A0xc872c57f28df1f90!2sSankalpa%20Skin%20and%20ENT%20center!5e0!3m2!1sen!2sin!4v1748778318116!5m2!1sen!2sin"
                    width="1040px;"
                    height="299px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Contact