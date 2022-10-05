import React, { useEffect } from 'react'
import '../assets/css/main/2_1_Introduction.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components';

const Div = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
`

function Introduction() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="introduction">
                <div className="intro">
                    <div className="intro_calender" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
                        2022.06.11 4pm.
                        <br />Seoul Forest.
                    </div>
                    <div className="intro_team" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Project Oumtt</div>
                    <div className="intro_title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200"></div>
                </div>

                <a href="#contact"><button className="intro_cta-button">관람 신청하기</button></a>
            </div>

            <div className="media">
                <Div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
                    <div className="media_text">
                        Oumtt’s First Nature Project Series
                    </div>
                    <div className="media_title">
                        ‘Naturally in Nature’
                    </div>
                </Div>
                <div className="media_Oumtt">
                    <iframe className="media_Oumtt_1" width="328" height="184" src="https://www.youtube.com/embed/XNXEwBlRvpY?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe className="media_Oumtt_2" width="800" height="450" src="https://www.youtube.com/embed/XNXEwBlRvpY?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="media_notice">
                    음소거 해제 버튼을 눌러 소리와 함께 감상해주세요
                </div>
            </div>
        </>
    );
}

export default Introduction;