import React from 'react'
import Tag from '../Tag';

import Introduction from './1_Introduction';
import Sohyun from './2_Sohyun';
import Yuki from './3_Yuki';
import Taehoon from './4_Taehoon';
import Floodwood from './5_Floodwood';
import StandardA from './6_StandardA';
import Vestebro from './7_Vestebro';
import Cosis from './8_Cosis';
import Contact from '../Contact'

import Introduction_b from '../assets/img/exhibit_program/1_Introduction_b.png';
import Sohyun_b from '../assets/img/exhibit_program/2_Sohyun_b.png';
import Yuki_b from '../assets/img/exhibit_program/3_Yuki_b.png';
import Taehoon_p from '../assets/img/exhibit_program/4_Taehoon_Profile.png'
import Taehoon_b from '../assets/img/exhibit_program/4_Taehoon_b.png';
import Floodwood_b from '../assets/img/exhibit_program/5_Floodwood_b.png';
import StandardA_b from '../assets/img/exhibit_program/6_StandardA_b.png'
import Vestebro_b from '../assets/img/exhibit_program/7_Vestebro_b.png'
import Cosis_b from '../assets/img/exhibit_program/8_Cosis_b.png'
import Contact_b from '../assets/img/Contact_b.png'

import '../assets/css/exhibit_program.scss';
import styled from 'styled-components';
import media from '../media'
// import { useState } from 'react';
// import Axios from 'axios';

const Imgp = styled.img`
    ${media.mobile`
        width: 212px;
        height: 212px;
        position: absolute;
        left: 50%;
        top: 1484px;
        transform: translate(-50%, 0%);
    `}
`

function Program() {

    // const [image, setImage] = useState([])
    // useEffect(() => {
    //     getImages()
    // }, [])

    // let getImages = async () => {
    //     let response = await fetch (`/api/images/`)
    //     let data = await response.json()
    //     console.log('DATA: ', data)
    //     setImage(data)
    // }
    // {image.map(list => <Img src={list.photo} alt=""/>)}

    const tags = [
        {tag:Introduction, img:Introduction_b},
        {tag:Sohyun, img:Sohyun_b},
        {tag:Yuki, img:Yuki_b},
        {tag:Taehoon, img:Taehoon_b},
        {tag:Floodwood, img:Floodwood_b},
        {tag:StandardA, img:StandardA_b},
        {tag:Vestebro, img:Vestebro_b},
        {tag:Cosis, img:Cosis_b},
        {tag:Contact, img:Contact_b},
    ]

    let tag, tag2 = ([], [])
    tag = tags.filter((list,idx) => idx <= 3).map((list) => { 
        return(<Tag key={list.tag} tag={list.tag} img={list.img}></Tag>)
    })

    tag2 = tags.filter((list,idx) => idx >= 4).map((list) => { 
        return(<Tag key={list.tag} tag={list.tag} img={list.img}></Tag>)
    })

    return ( 
        <div className='exhibit_program'>
            {tag}
            <Imgp src={Taehoon_p}></Imgp>
            {tag2}
        </div>
    );
}

export default Program;