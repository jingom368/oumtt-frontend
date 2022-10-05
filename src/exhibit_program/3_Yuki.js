import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import Yuki_p from '../assets/img/exhibit_program/3_Yuki_p.png'
import { Btitle, Mtitle, SText, LRiv, Img, Line } from './components/GlobalStyle'
import { link } from './components/Link'

const HDiv = styled.div`
    ${media.mobile`
        * {
            margin-right: 16px;
            text-align: right;
        }
        display:flex;
        flex-direction: column;
    `}
`

const Yuki = () => {

    return (
        <>
            <Btitle>Collaboration Artists</Btitle>
            <Line mmt="11.5px"></Line>
            <LRiv mjc="space-between">
                <Img src={Yuki_p} mw="129px" mh="168px" mmt="24px" mml="16px"/>
                <HDiv>
                    <Mtitle mmt="32px">Main Artist</Mtitle>
                    <SText mta="right" mmt="8px">Yuki Jin</SText>
                    <SText mta="right" mmt="32px">Drawing ,Photo, Costume</SText>
                    <SText mta="right" mmt="48px" mlh="12px">Meus Art Album Project 총괄기획<br/>홍익대학교 조소과 학사 졸업<br/>Figure Artist &amp; Photographer </SText>
                </HDiv>
            </LRiv>
            <SText mmt="64px">배소현 무용수는 생각이 깊은 사람이다.</SText>
            <SText mmt="96px" mlh="16px">그녀가 좋아하는 파란 물감으로<br/>그 깊이를 표현해 보고 싶었다.</SText>
            <LRiv mjc="end" mmt="132px">{link.Yukilink}</LRiv>
            <Mtitle mta="center" mmt="76px">Music Composer</Mtitle>
        </>
    )
}

export default Yuki
