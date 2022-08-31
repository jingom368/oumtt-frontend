import React from 'react'
// import Introduction from './2_1_Introduction';
// import Exhibit from './2_2_Exhibit';
// import PersonalColor from './2_3_Personal_Color';
// import Reservation from './2_4_Reservation';
// import Picture from './2_5_Picture';
// import Oumtt from './2_6_Oumtt';
// import Project from './2_7_Project';
// import Team from './2_8_Team';
// import Latest from './2_9_Latest'
// import Contact from './2_10_Contact';
// import Footer from '../3_Footer'
// import Human_Exhibition from '../assets/img/Human_Exhibition2.png';
// import Exhibition_Background from '../assets/img/Exhibition_Background.png';
// import Personal_Background from '../assets/img/Personal_Background.png';
// import Reservation_Background from '../assets/img/Reservation_Background.png';
// import Oumtt_Background from '../assets/img/Oumtt_Background.png';
// import Team_Background from '../assets/img/Team_Background.png'
import '../assets/css/human_main/2_0_main.scss';
import styled from 'styled-components';
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import media from '../media'


    const MainDiv = styled.main`
        width: 100%;
        height: auto;
    `

    const Img = styled.img`
        display: flex;
        width: 100%;
        height: 100%
        object-fit: cover;
        ${media.mobile`
            width: 100%
        `}
    `;

    const Img1 = styled.img`
        display: flex;
        width: 1024px;
        height: 100%
        object-fit: cover;
        ${media.mobile`
            width: 100%;
        `}
    `;

function Program() {

    return ( 
        <MainDiv>
                <div className='item'>
                    <Img1 src={Human_Exhibition} alt=""/>
                    <div className='item_box'><Introduction></Introduction></div>
                </div>
                <div className='item'>                
                    <Img src={Exhibition_Background} alt=""/>
                    <div className='item_box'><Exhibit></Exhibit></div>
                </div>
                <div className='item'>                
                    <Img src={Personal_Background} alt=""/>
                    <div className='item_box'><PersonalColor></PersonalColor></div>
                </div>
                <div className='item'>                
                    <Img src={Reservation_Background} alt=""/>
                    <div className='item_box'><Reservation></Reservation></div>
                </div>
                <div className='item'><div className='item_box'><Picture></Picture></div></div>
                <div className='item'>
                    <Img src={Oumtt_Background} alt=""/>
                    <div className='item_box'><Oumtt></Oumtt></div>
                </div>
                <div className='item'><div className='item_box'><Project></Project></div></div>
                <div className='item'>
                    <Img src={Team_Background} alt=""/>
                    <div className='item_box'>
                        <Team></Team><Latest></Latest><Contact></Contact><Footer></Footer>
                    </div>
                </div>
                <div className='item'><div className='item_box'></div></div>
        </MainDiv> 
    );
}

export default Program;