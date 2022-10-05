import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import oumtt_Yuki from '../assets/img/exhibit_program/1_oumtt_Yuki.png'
import { Btitle, Mtitle, Img } from './components/GlobalStyle'

    const MtitleC = styled(Mtitle)`
        ${media.mobile`
            letter-spacing: 0.1em;
            filter: blur(0.5px);
        `}
    `;

    const BtitleC = styled(Btitle)`
        ${media.mobile`
            font-family: 'Maitree' !important;
            letter-spacing: 0.1em;
            margin-top: 184px;
            filter: blur(0.5px);
        `}
    `

const Introduction = () => {
    return (
        <>
            <Img src={oumtt_Yuki} mw="89px" mh="20px" mmt="96px" mml="100px"></Img> 
            <MtitleC mmt="64px" mml="108px">배 소 현 전시</MtitleC> 
            <BtitleC mta="center" mmt="184px">|Personal Colors_Blue</BtitleC>
        </>
    )
}

export default Introduction
