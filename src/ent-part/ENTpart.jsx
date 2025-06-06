import React from 'react'
import styles from './Entpart.module.css'
import { Link } from 'react-router-dom';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Entpart = (props) => {

    const cardRefs = useRef([]);
    const [flippedStates, setFlippedStates] = useState([]);


    useEffect(() => {
        cardRefs.current = props.cards.map((_, i) => cardRefs.current[i] ?? React.createRef());
        setFlippedStates(props.cards.map(() => false));
    }, [props.cards]);

    const handleFlip = (index, isFlipped) => {
        const newFlippedStates = [...flippedStates];
        newFlippedStates[index] = isFlipped;
        setFlippedStates(newFlippedStates);

        gsap.to(cardRefs.current[index].current, {
            rotationY: isFlipped ? 180 : 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
    };


    return (
        <div>
            <div className={styles.ent_part}>
                <div className={styles.ent_content}>
                    <div className={styles.about_h_ent}>ENT Consultation Timing</div>
                    <div >
                        <div className={styles.ent}>
                            {
                                props.cards.map((cards, index) => (
                                    <div className={styles.box1} key={index}
                                        ref={cardRefs.current[index]} 
                                        style={{ transformStyle: "preserve-3d", backgroundColor: cards.working ? "#00834E" : "#B10018"}}
                                        onMouseOver={() => handleFlip(index, true)}
                                        onMouseLeave={() => handleFlip(index, false)}>  
                                        <div className={styles.front}>
                                            <div className={styles.day}>{cards.day}</div>
                                            <div className={styles.time}>{cards.time}</div>
                                        </div>

                                        <div className={styles.back} style={{transform: "rotateY(180deg)"}}>
                                            <div className={styles.day}>{cards.day}</div>
                                            <div className={styles.time}>{cards.time}</div>
                                        </div>    
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={'/Contact'}><button className={styles.btn}>Book Appointment</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Entpart