import React, { useRef, useState } from 'react'
import styles from './Jagadish.module.css'
import { assets } from '../../assets/assets'
import Navbar from '../../nav-bar/Navbar'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import Entpart from '../../ent-part/ENTpart.jsx'
import DoctorPageBanner from '../../DoctorPageBanner/DoctorPageBanner'



const Jagadish = () => {    

    const hoverRef = useRef([])
    const [isHovered, setIsHovered] = useState([false])


    const hoverEffect =(index, isHover)=>{
        const newisHover =[...isHovered];
        newisHover[index] = isHover;
        setIsHovered(newisHover)

        console.log(newisHover, index)

    }

    const cards = [
        {
            day: "Mon",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Tue",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Wed",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Thu",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Fri",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Sat",
            time: "10AM - 4PM",
            working: true
        },
        {
            day: "Sun",
            time: "Closed",
            working: false
        },

    ]

    const doctorcards = [
        {
            img1: assets.dryskin,
            img2: assets.dryskincolor,
            title: "Acne & Acne Scars",
            para: "Acne is a common skin condition that develops when hair follicles become clogged with oil and dead skin cells. It often appears on the face, back and shoulders, especially during adolescence and young adulthood. While acne can range from mild to severe, its aftermath - scarring - can be equally distressing. These scars may appear as dark spots, pits or raised areas and often take a toll on emotional well-being as much as physical appearance."
        },
        {
            img1: assets.handfoot,
            img2: assets.handfootcolor,
            title: "Skin Allergies & Rashes",
            para: "Skin allergies are hypersensitive reactions to allergens such as pollen, food, fabrics, or skincare products. They commonly present as rashes, itching, redness, or swelling. While some rashes are acute and short-lived, others may be chronic and linked to underlying conditions like eczema or contact dermatitis. Identifying triggers is key to managing these conditions effectively."
        },
        {
            img1: assets.hand,
            img2: assets.handcolor,
            title: "Fungal & Bacterial Infections",
            para: "Fungal and bacterial infections are among the most frequent causes of skin discomfort. Fungal infections like ringworm or candidiasis thrive in warm, moist areas and often result in itchy, red patches. Bacterial infections, such as impetigo or folliculitis, can cause painful boils or crusted sores. These infections can spread quickly if untreated and often require both topical and systemic interventions."
        },
        {
            img1: assets.skintone,
            img2: assets.skintonecolor,
            title: "Pigmentation & Uneven Skin Tone",
            para: "Pigmentation disorders cause the skin to appear darker or lighter than usual, or blotchy. Common forms include melasma, sun spots and post-inflammatory hyperpigmentation. These changes may result from sun exposure, hormonal changes, or skin trauma. Though generally harmless, they can be aesthetically concerning and are often persistent without proper care."
        },
        {
            img1: assets.hairloss,
            img2: assets.hairlosscolor,
            title: "Hair Fall & Dandruff",
            para: "Hair fall can be triggered by genetics, stress, hormonal imbalances, or nutritional deficiencies. It may present as gradual thinning or sudden shedding. Dandruff, on the other hand, is often caused by scalp inflammation or fungal overgrowth, leading to flaking and itchiness. Both conditions are not only visible concerns but also signal underlying scalp or systemic issues."
        },
        {
            img1: assets.allergy,
            img2: assets.allergycolor,
            title: "Psoriasis, Eczema, Urticaria",
            para: "These chronic skin disorders often result in inflammation, itching and recurring flare-ups. Psoriasis is an autoimmune condition characterized by thick, scaly patches. Eczema, or atopic dermatitis, leads to dry, cracked and irritated skin, especially in children. Urticaria (hives) causes red, itchy welts that appear suddenly. Though different in cause, all three can significantly impact daily life and require long-term management."
        },
        {
            img1: assets.irritant,
            img2: assets.irritantcolor,
            title: "Warts, Moles & Skin Tags",
            para: "These are benign skin growths that appear for various reasons. Warts are caused by the human papillomavirus (HPV), while moles are pigment-producing cells grouped together. Skin tags are soft, flesh-colored growths that usually develop in skin folds. While harmless, their location or size can make them bothersome or aesthetically undesirable."
        },
        {
            img1: assets.nail,
            img2: assets.nailcolor,
            title: "Nail Disorders",
            para: "Nail disorders may reflect local trauma or systemic health conditions. Common issues include fungal infections, brittle or thickened nails, discoloration and ingrown nails. Though often dismissed as cosmetic, persistent nail changes can signal deeper health concerns and may affect functionality and comfort."
        },
        {
            img1: assets.protection,
            img2: assets.protectioncolor,
            title: "Anti-Ageing & Skin Rejuvenation",
            para: ">As we age, the skin undergoes structural changes - loss of collagen, elasticity and hydration. This leads to fine lines, dullness and sagging. Rejuvenation focuses on improving texture, tone and firmness through supportive skincare and clinical strategies that enhance the skin’s natural renewal processes over time."
        },

    ]

    const details = [
        {
            name: 'Dr. N.A. Jagadish',
            Qualiication: 'B.Sc, MBBS, D.V.D',
            year: '41 Years of Experience',
            Experience: 'Senior Consultant Dermatologist',
            img: ""
        }
    ]


    return (
        <div >
            <div className={styles.full}>
                <div>
                    <DoctorPageBanner detail={details[0]} />
                </div>
                <div className={styles.content_part}>
                    <div className={styles.about_part}>
                        <div className={styles.about_h}>About the Doctor</div>
                        <div className={styles.about_p}>Dr. N.A. Jagadish is a trusted dermatologist with years of clinical experience in managing skin, hair and nail concerns across all age groups. Known for his thoughtful, patient-focused approach, he combines clinical insight with a deep understanding of both medical and aesthetic dermatology. His consultations are rooted in clear communication and evidence-based care, helping patients feel confident and well-informed at every step. He routinely treats a range of skin conditions, from chronic concerns to cosmetic improvements, with a focus on long-term skin health and visible results.</div>
                    </div>

                    <div className={styles.expertise}>
                        <div className={styles.expertise_h}>Areas Of Expertise :</div>
                        <div >
                            {/* card-1 */}
                            <div className={styles.cards}>
                                {
                                    doctorcards.map((card, index) => (
                                        <div className={styles.card1} key={index}
                                        ref={(el) => (hoverRef.current[index] = el)}
                                        onMouseEnter={() => hoverEffect(index, true)}
                                        onMouseLeave={() => hoverEffect(index, false)}
                                            >
                                           <img src={isHovered[index] ? card.img1 : card.img2} alt="" />
                                            <div className={styles.sub_h}>{card.title}</div>
                                            <div className={styles.sub_p}>{card.para}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* ENT_part */}
                    <div>
                        <Entpart cards={cards} />
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Jagadish