import React, { useRef, useState } from 'react'
import styles from './Sridutt.module.css';
import Navbar from '../../nav-bar/Navbar'
import { assets } from '../../assets/assets';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import Entpart from '../../ent-part/ENTpart';
import DoctorPageBanner from '../../DoctorPageBanner/DoctorPageBanner';

const Sridutt = () => {

    const cardRef = useRef([]);
    const [isHoverEffect, setIsHoverEffect] = useState([false])


    const cardHover = (index, isHover) => {
        const newisHover = [...isHoverEffect];
        newisHover[index] = isHover;
        setIsHoverEffect(newisHover)
    }

    const cards = [
        {
            day: "Mon",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Tue",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Wed",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Thu",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Fri",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Sat",
            time: "4 PM - 7 PM",
            working: true
        },
        {
            day: "Sun",
            time: "Closed",
            working: false
        },

    ]

    const doctor = [
        {
            img1: assets.hearing,
            img2: assets.hearingcolor,
            title: "Hearing Loss & Ear Discharge",
            para: "Hearing loss is a reduction in the ability to perceive sounds and can range from mild to complete hearing loss. It may be temporary or permanent and is commonly associated with conditions affecting the outer, middle, or inner ear. Ear discharge, also called otorrhea, is the drainage of fluid from the ear and often indicates infection or trauma.Common causes include earwax impaction, otitis media (middle ear infection), tympanic membrane perforation, chronic ear disease, or exposure to loud noise. Ear discharge can occur due to bacterial or fungal infections, foreign body presence, or ruptured eardrums."
        },
        {
            img1: assets.sore,
            img2: assets.sorecolor,
            title: "Voice Hoarseness & Throat Pain",
            para: "Hoarseness is characterized by a raspy or strained voice, often due to inflammation or lesions of the vocal cords. Throat pain may accompany hoarseness and is frequently linked to infections, allergies or reflux.Causes include acute laryngitis, vocal overuse, acid reflux (LPR), vocal cord nodules, polyps, or early malignancies. Throat pain may also result from bacterial infections, post-nasal drip, or tonsillar issues."
        },
        {
            img1: assets.sleeping,
            img2: assets.sleepingcolor,
            title: "Snoring & Sleep Breathing Issues",
            para: "Snoring is noisy breathing during sleep caused by vibrations of soft tissues in the throat. When associated with frequent breathing pauses, it may indicate Obstructive Sleep Apnea (OSA), a serious health condition.Common causes include obesity, nasal blockage, enlarged tonsils or adenoids, weak throat muscles and a long soft palate. OSA can lead to fatigue, heart issues and poor quality of life if untreated."
        },
        {
            img1: assets.baby,
            img2: assets.babycolor,
            title: "Pediatric ENT Problems",
            para: "Hoarseness is characterized by a raspy or strained voice, often due to inflammation or lesions of the vocal cords. Throat pain may accompany hoarseness and is frequently linked to infections, allergies or reflux.Causes include acute laryngitis, vocal overuse, acid reflux (LPR), vocal cord nodules, polyps, or early malignancies. Throat pain may also result from bacterial infections, post-nasal drip, or tonsillar issues."
        },
        {
            img1: assets.ear1,
            img2: assets.earcolor1,
            title: "Ear Ringing (Tinnitus) & Dizziness",
            para: "Tinnitus is the perception of sound (ringing, buzzing, or clicking) without an actual source. Dizziness or vertigo refers to a sensation of spinning or imbalance, often related to inner ear issues.These symptoms are commonly caused by sensorineural hearing loss, ear infections, vestibular neuronitis, Meniere’s disease, or prolonged exposure to loud noise."
        },
        {
            img1: assets.nose,
            img2: assets.nosecolor,
            title: "Nosebleeds & Deviated Septum",
            para: "Nosebleeds (epistaxis) occur when blood vessels in the nasal lining rupture, often due to trauma, dryness, or infection. A deviated nasal septum, where the nasal partition is off-center, can cause breathing difficulties, snoring and recurrent nosebleeds.Contributing factors include nasal injuries, infections, environmental dryness, or congenital abnormalities."
        },
        {
            img1: assets.defect,
            img2: assets.defectcolor,
            title: "Speech Delay in Children",
            para: "Speech delay is when a child does not develop speech and language skills within the expected age range. It may affect expressive, receptive, or social communication abilities.Causes include hearing impairment, recurrent ear infections, enlarged adenoids, neurological delays, or autism spectrum disorders."
        },
        {
            img1: assets.head,
            img2: assets.headcolor,
            title: "General ENT Check-ups & Minor Procedures",
            para: "ENT health involves more than just treating infections. Routine check-ups can help identify early signs of hearing loss, sinus problems, throat issues, or structural abnormalities."
        },
        {
            img1: assets.voice,
            img2: assets.voicecolor,
            title: "Voice Surgeries",
            para: "Voice disorders affect communication and can severely impact quality of life, especially for individuals who rely on their voice professionally. These conditions may involve vocal cord nodules, cysts, paralysis, or scarring.Causes include voice overuse, trauma, infections, acid reflux, or tumors of the vocal cords."
        },
        {
            img1: assets.mouth,
            img2: assets.mouthcolor,
            title: "Tonsillectomy",
            para: "Voice disorders affect communication and can severely impact quality of life, especially for individuals who rely on their voice professionally. These conditions may involve vocal cord nodules, cysts, paralysis, or scarring.Causes include voice overuse, trauma, infections, acid reflux, or tumors of the vocal cords."
        },
        {
            img1: assets.neck,
            img2: assets.neckcolor,
            title: "Head and Neck Tumor Surgery",
            para: "Head and neck tumors can affect the salivary glands, thyroid gland, lymph nodes, or mucosal areas of the mouth and throat. Symptoms may include a lump, difficulty swallowing, voice changes, or unexplained weight loss.Causes range from benign cysts to malignancies linked to tobacco use, viral infections, or genetic factors."
        },
        {
            img1: assets.human,
            img2: assets.humancolor,
            title: "Surgery for Obstructive Sleep Apnea",
            para: "Obstructive Sleep Apnea (OSA) is a condition where the airway becomes partially or fully blocked during sleep, leading to breathing pauses, disrupted rest and decreased oxygen levels. It is often associated with loud snoring, daytime fatigue and long-term cardiovascular complications.OSA may be caused by structural abnormalities such as enlarged tonsils, a deviated nasal septum, excess soft tissue in the throat, or weak airway muscles."
        },
        {
            img1: assets.rhinoplasty,
            img2: assets.rhinoplastycolor,
            title: "Endoscopic Minimal Access Septoplasty & Sinus Surgery",
            para: "Chronic nasal congestion and recurrent sinus infections often stem from structural blockages in the nasal passage and sinuses. Septoplasty corrects a deviated nasal septum, while endoscopic sinus surgery opens blocked sinus channels.Conditions treated include chronic sinusitis, nasal polyps, mucosal thickening and sinus headaches."
        },
        {
            img1: assets.ear,
            img2: assets.earcolor,
            title: "Micro Ear Surgery for Hearing Restoration - Tympanoplasty",
            para: "Tympanoplasty is a surgical procedure to repair a perforated eardrum and restore hearing. It may also involve reconstruction of middle ear bones in cases of chronic ear infections or trauma.The most common causes include recurrent otitis media, trauma, or prolonged ear discharge."
        },
        {
            img1: assets.laser,
            img2: assets.lasercolor,
            title: "Microlaryngeal Surgery",
            para: "Microlaryngeal surgery is a specialized procedure to treat benign and malignant lesions of the vocal cords. It is recommended for conditions like vocal cord polyps, nodules, cysts and papillomas.Causes often include chronic voice misuse, prolonged inflammation, infections or laryngeal tumors."
        },
        {
            img1: assets.surgery,
            img2: assets.surgerycolor,
            title: "Endoscopic Sinonasal Tumor Surgery",
            para: "Sinonasal tumors may develop in the nasal cavity or sinuses and present with symptoms like nasal obstruction, facial swelling, epistaxis, or vision changes. These tumors may be benign or malignant and require prompt attention.Risk factors include chronic inflammation, occupational exposure to irritants, or genetic predisposition."
        },
        {
            img1: assets.runny,
            img2: assets.runnycolor,
            title: "Allergic Rhinitis",
            para: "Allergic rhinitis is an immune system response to allergens such as dust, pollen, or pet dander. It causes symptoms like sneezing, nasal congestion, runny nose and itchy eyes.This condition may be seasonal (hay fever) or perennial and is often associated with asthma or sinusitis.We diagnose allergic rhinitis based on clinical symptoms and nasal examination.Treatment includes antihistamines, nasal sprays, allergen avoidance and lifestyle modifications. For chronic cases, immunotherapy or corrective nasal surgery may be recommended."
        },
    ]

    const details = [
        {
            name: 'Dr. Sridutt Shekar',
            Qualiication: 'MBBS, MS - ENT & Head and Neck Surgery',
            year: '10+ Years of Experience',
            Experience: 'Consultant ENT Surgeon',
            img: assets.drImage2
        }
    ]


    return (
        <div className={styles.full}>
            <div>
                <DoctorPageBanner detail={details[0]} />
            </div>
            <div className={styles.contentpart}>
                <div>
                    <div className={styles.mainheading}>About the Doctor</div>
                    <div className={styles.para}>Dr. Sridutt Shekar is a dedicated ENT specialist known for delivering focused, patient-centric care across a wide range of ear, nose and throat conditions. With expertise in both medical and surgical ENT management, he is skilled in performing advanced procedures such as Functional Endoscopic Sinus Surgery, Micro Ear Surgery and Microlaryngeal interventions. He also routinely manages cases involving allergic rhinitis, tonsillar conditions, adenoid hypertrophy and obstructive sleep apnea.</div>
                </div>

                <div className={styles.cardpart}>
                    <div className={styles.heading}>Areas Of Expertise :</div>
                    <div className={styles.cards}>
                        {
                            doctor.map((doctor, index) => (
                                <div className={styles.card1} key={index}
                                    ref={(el) => (cardRef.current[index] = el)}
                                    onMouseEnter={() => cardHover(index, true)}
                                    onMouseLeave={() => cardHover(index, false)}
                                >
                                    <img src={isHoverEffect[index] ? doctor.img1 : doctor.img2} alt="" />
                                    {/* <img src={doctor.img} alt="" /> */}
                                    <div className={styles.subheading}>{doctor.title}</div>
                                    <div className={styles.subpara}>{doctor.para}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* ENT part */}
                <Entpart cards={cards} />
            </div>
        </div>
    )
}

export default Sridutt