import React from 'react'
import styled from 'styled-components'
import Content from './components/Select_Content';
import '../assets/css/0_basic.scss'
import Reservation_Text from '../assets/img/exhibit_main/Reservation_Text.png';
import media from '../media'
import oumttGif from '../assets/img/exhibit_main/oumtt.gif'

    const TextPng = styled.img`
        width: 242px;
        height: 40px;
        align-self: flex-start;
        object-fit: contain;
        ${media.mobile`
            width: 109px;
            height: 18px;
        `}
    `

    const STitle = styled.div`
        font-family: 'Eulyoo1945_semi' !important;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.03em;
        color: #8CB3EE;
        text-shadow: 4px 4px 4px #EDEDED;
        margin-top: 96px;
        text-align: left;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
            margin-top: 36px;
        `}
    `
    
    const Text = styled.div`
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.03em;
        color: #5E5E5E;
        margin-top: 32px;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
            margin-top: 24px;
        `}
    `

    const Text1 = styled(Text)`
        margin-top: 16px;   
        ${media.mobile`
            margin-top: 10px;
        `}
    `

    const Selectbox = styled(Text)`
        width: 400px;
        height: 584px;
        padding: 36px;
        background-color: #ffffff;
        margin-top: 32px;
        margin-left: 55.5px;
        opacity: 0.7;
        ${media.mobile`
            width: 328px;
            height: 512px;
            padding: 0px;
            margin-top: 64px;
            margin-left: 0px;
            background-color: transparent;
        `}
    `

    const Mtitle = styled.div`
        font-family: 'Eulyoo1945_semi' !important;
        *{font-family: 'Eulyoo1945_semi' !important;}
        margin-top: 64px;
        font-weight: 600;
        font-size: 28px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.03em;
        color: #8CB3EE;
        text-shadow: 4px 4px 4px #EDEDED;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
            margin-top: 80px;
        `}
    `

    const Mtitle2 = styled.span`
        color: #FCD564;
    `

    const Mtitle3 = styled.span`
        color: #B4BCBE;
    `

    const Img = styled.img`
        width: 384px;
        height: 568px;
        margin-top: 170px;
        margin-left: 544px;
        position: absolute;
        ${media.mobile`
            display: none;
        `}
    `

function Reservation() {

    return ( 
    <> 
        <Img src={oumttGif}></Img>
        <TextPng src={Reservation_Text}></TextPng>
        <STitle>Color Blue | 배 소 현 전시 22 .09. 03 - 04  Sat , Sun</STitle>
        <Text>청년예술청 Sapy White 관</Text>
        <Text1>서울시 서대문구 충정로3가480 어바니엘 충정로 102동 B2 </Text1>
        <Selectbox><Content ></Content></Selectbox>
        <Mtitle>
            Color Blue 배 소 현 전시 | 09 / 03~4  Sat , Sun
            <br/><br/><Mtitle2>Color Yellow 오 하 솜 전시 | Comming Soon</Mtitle2>
            <br/><br/><Mtitle3>Color Ash - Blue 정 철 한 전시 | Comming Soon</Mtitle3>
        </Mtitle>
    </>
    );
}

export default Reservation;