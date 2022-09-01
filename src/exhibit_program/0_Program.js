import React from 'react'
import Introduction from './1_Introduction';
import Sohyun from './2_Sohyun';
import Yuki from './3_Yuki';
import Taehoon from './4_Taehoon';
import Floodwood from './5_Floodwood';
import StandardA from './6_StandardA';
import Vestebro from './7_Vestebro';
import Cosis from './8_Cosis';
// import Footer from '../3_Footer'
import Introduction_b from '../assets/img/exhibit_program/Introduction.png';
import Sohyun_b from '../assets/img/exhibit_program/Sohyun.png';
import Yuki_b from '../assets/img/exhibit_program/Yuki.png';
import Taehoon_p from '../assets/img/exhibit_program/Taehoon_Profile.png'
import Taehoon_b from '../assets/img/exhibit_program/Taehoon.png';
import Floodwood_b from '../assets/img/exhibit_program/Floodwood.png';
import StandardA_b from '../assets/img/exhibit_program/StandardA.png'
import Vestebro_b from '../assets/img/exhibit_program/Vestebro.png'
import Cosis_b from '../assets/img/exhibit_program/Cosis.png'
import '../assets/css/human_program/2_0_program.scss';
import styled from 'styled-components';
import media from '../media'
import right from '../assets/svg/right2x4.svg'

const Img = styled.img`
    display: flex;
    width: 100%;
    height: 100%
    object-fit: cover;
    ${media.mobile`
        width: 360px;
    `}
`;

const Text = styled.div`
    ${media.mobile`
        font-size: 6px;
        line-height: 10px;
        color: ${(props)=>props.mcolor};
        text-align: ${(props)=>props.mta};
        margin-top: ${(props)=>props.mmt};
        margin-right: ${(props)=>props.mmr};
        font-size: ${(props)=>props.mfs};
        line-height: ${(props)=>props.mlh};
    `}
`

const Svg = styled.div`
    ${media.mobile`
        width: 20px;
        heigth: 40px;
        margin-left: 4px;
    `}
`

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

    return ( 
        <div className='program'>
            <div className='item'>
                <Img src={Introduction_b} alt=""/>
                <div className='item_box'><Introduction></Introduction></div>
            </div>
            <div className='item'>                
                <Img src={Sohyun_b} alt=""/>
                <div className='item_box'><Sohyun></Sohyun></div>
            </div>
            <div className='item'>
                <Img src={Yuki_b} alt=""/>
                <div className='item_box'><Yuki></Yuki></div>
            </div>
            <div className='item'>                
                <Img src={Taehoon_b} alt=""/>
                <div className='item_box'><Taehoon></Taehoon></div>
            </div>
            <Imgp src={Taehoon_p}></Imgp>
            <div className='item'>
                <Img src={Floodwood_b} alt=""/>
                <div className='item_box'><Floodwood></Floodwood></div>
            </div>
            <div className='item'>
                <Img src={StandardA_b} alt=""/>
                <div className='item_box'><StandardA></StandardA></div>
            </div>
            <div className='item'>
                <Img src={Vestebro_b} alt=""/>
                <div className='item_box'><Vestebro></Vestebro></div>
            </div>
            <div className='item'>
                <Img src={Cosis_b} alt=""/>
                <div className='item_box'><Cosis></Cosis></div>
            </div>
        </div>
    );
}

export default Program;