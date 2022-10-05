import React from 'react'
import Tag from '../Tag';

import Introduction from './2_1_Introduction';
import Exhibition from './2_2_Exhibit';
import PersonalColor from './2_3_Personal_Color';
import Reservation from './2_4_Reservation';
import Picture from './2_5_Picture';
import Oumtt from './2_6_Oumtt';
import Project from './2_7_Project';
import Team from './2_8_Team';
import Contact from '../Contact'

import Introduction_b from '../assets/img/exhibit_main/1_Introduction.png';
import Exhibition_b from '../assets/img/exhibit_main/2_Exhibition_b.png';
import PersonalColor_b from '../assets/img/exhibit_main/3_PersonalColor_b.png';
import Reservation_b from '../assets/img/exhibit_main/4_Reservation_b.png';
import Oumtt_b from '../assets/img/exhibit_main/6_Oumtt_b.png';
import Team_b from '../assets/img/Team_Background.png'
import Contact_b from '../assets/img/Contact_b.png'

import '../assets/css/exhibit_main.scss';
import styled from 'styled-components';

    const MainDiv = styled.main`
        width: 100%;
        height: auto;
    `

function Main() {

    const tags = [
        {tag:Introduction, img:Introduction_b},
        {tag:Exhibition, img:Exhibition_b},
        {tag:PersonalColor, img:PersonalColor_b},
        {tag:Reservation, img:Reservation_b},
        {tag:Picture, img:"", display:"none"},
        {tag:Oumtt, img: Oumtt_b},
        {tag:Project, img:"", display:"none"},
        {tag:Team, img:Team_b},
        {tag:Contact, img:Contact_b}
    ]

    let tag = []
    tag = tags.map((list) => { 
        return(<Tag key={list.tag} tag={list.tag} img={list.img} display={list.display}></Tag>)
    })

    return ( 
        <MainDiv className='exhibit_main'>
                {tag}
        </MainDiv> 
    );
}

export default Main;