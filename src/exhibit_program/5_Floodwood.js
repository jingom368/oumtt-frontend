import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import nuri from '../assets/img/exhibit_program/5_Nuri.png'
import Floodwood_p from '../assets/img/exhibit_program/5_Floodwood_p.png'
import { Mtitle, Text, SText, LRiv, Img, Line } from './components/GlobalStyle'
import { link } from './components/Link'

const ImgC = styled(Img)`
    ${media.mobile`
        position: ${(props)=>props.mp};
        left: 50%;
        top: ${(props)=>props.mt};
        transform: ${(props)=>props.mtf};
    `}
`

const Absolute = styled.div`
    ${media.mobile`
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-top: 192px;
        width: 328px;
    `}
`

const Floodwood = () => {

    return (
        <>
            <Mtitle>Floodwood</Mtitle>
            <LRiv>
                <Text mmt="4px" mta="left">유목이야기</Text>
                <Line mw="120px" mml="66px" mmt="11.5px" mcolor="rgba(255, 255, 255, 0.5)"></Line>
            </LRiv>
            <ImgC src={nuri} mw="134px" mh="156px" mp="absolute" mmt="36px" mtf="translate(-50%, 0%)"></ImgC>
            <ImgC src={Floodwood_p} mw="328px" mh="344px" mmt="96px" ></ImgC>
            <Absolute>
                <LRiv>
                    <Text mmt="48px" mml="36px">Object info.</Text>
                    <Line mw="128px" mmt="51.5px" mml="21px" mcolor="rgba(255, 255, 255, 0.5)" mas="auto"></Line>
                </LRiv>
                <LRiv mmt="32px" mjc="space-around">
                    {link.Floodwood_f} 
                    {link.Floodwood_s}
                </LRiv>
                <Text mmt="60px">Personal Colors</Text>
                <SText mmt="16px" mlh="16px">‘여름 저녁 바다의 블루’<br/>파란색은 우리에게 고요함과 안정을 주는 힘이 있어요.<br/>하지만 정작 식물과 꽃같은 자연에서는파란색을 찾아보기가 힘들죠.<br/>바다의 파란색, 하늘의 파란색.<br/>파란색은 정작 손에는 잘 잡히지 않는 정말 신비한 색인것 같아요.</SText>
            </Absolute>
            <LRiv mjc="end" mmt="24px">
                {link.Floodwoodlink}
            </LRiv>
        </>
    )
}

export default Floodwood
