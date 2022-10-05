import React, { useEffect } from 'react'
import '../assets/css/program/2_1_Introduction.scss'
import IntroRound from './component/1_Intro_round'
import AOS from 'aos';
import "aos/dist/aos.css";

function Introduction() {
    const timetable = ['Intro', 'Celebration', 'With You', 'The Table', 'The Chairs']
    const timetable_list = []
    for(let i=0; i<timetable.length; i++) {
        timetable_list.push(<IntroRound key={timetable[i]} timetable={timetable[i]}></IntroRound>)
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="intro_title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Artist Profile & Program</div>
            <div className="intro_nature" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">‘Naturally in Nature’</div>
            <div className="intro_line"></div>
            <div className="intro_border">
                {timetable_list}
            </div>
        </>                
    );
}

export default Introduction;