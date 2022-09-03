import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import nuri from '../assets/img/exhibit_program/Nuri.png'
import Floodwood_p from '../assets/img/exhibit_program/Floodwood_p.png'
import right from '../assets/svg/right2x4.svg'

const Mtitle = styled.div`
    ${media.mobile`
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    `}
`

const LRiv = styled.div`
    ${media.mobile`
        display: flex;
        flex-direction: row;
        justify-content: ${(props)=>props.mjc};
        margin-top: ${(props)=>props.mmt};
    `}
`

const Text = styled.div`
    ${media.mobile`
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        line-height: 8px;
        color: #FFFFFF;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
        font-weight: ${(props)=>props.mfw};
    `}
`

const SText = styled.div`
    ${media.mobile`
        font-weight: 400;
        font-size: 6px;
        line-height: 12px;
        color: #FFFFFF;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
    `}
`

const Line = styled.div`
    ${media.mobile`
        width: 120px;
        height: 0.5px;
        border-top: 0.5px solid rgba(255, 255, 255, 0.5);
        margin-left: ${(props)=>props.mml};
        margin-top: ${(props)=>props.mmt};
    `}
`

const Img = styled.img`
    ${media.mobile`
        width: ${(props)=>props.mw};
        height: ${(props)=>props.mh};
        margin-top: ${(props)=>props.mmt};
        position: ${(props)=>props.mp};
        left: 50%;
        top: ${(props)=>props.mt};
        transform: ${(props)=>props.mtf};
    `}
`

const Absolute = styled.div`
    ${media.mobile`
        position: absolute;
        margin-top: 192px;
    `}
`

const Svg = styled.img`
    ${media.mobile`
        width: 4px;
        height: 8px;
        margin-left: 4px;
    `}
`

const Floodwood = () => {
    return (
        <>
            <Mtitle>Floodwood</Mtitle>
            <LRiv>
                <Text mmt="4px">유목이야기</Text>
                <Line mml="66px" mmt="11.5px"></Line>
            </LRiv>
            <Img src={nuri} mw="134px" mh="156px" mp="absolute" mmt="36px" mtf="translate(-50%, 0%)"></Img>
            <Img src={Floodwood_p} mw="328px" mh="344px" mmt="96px" ></Img>
            <Absolute>
                <LRiv>
                    <Text mmt="48px" mml="36px">Object info.</Text>
                    <Line mmt="51.5px" mml="21px"></Line>
                </LRiv>
                <LRiv mmt="24px">
                    <a href="https://jazzy-second-e86.notion.site/8b16fd2cace240b6866d4ffec86a51db"><LRiv>
                        <SText mml="69px">‘자만보다는 낭만’</SText>
                        <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                    </LRiv></a>
                    <a href="https://jazzy-second-e86.notion.site/4abfbb004be34437b495e81e7c01cbf5"><LRiv>
                        <SText mml="72px">‘나에게만 보이는 보물들’</SText>
                        <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                    </LRiv></a>
                </LRiv>
                <Text mmt="60px" mml="135px">Personal Colors</Text>
                <Text mta="center" mmt="16px" mml="52px" mlh="16px" mfw="400">‘여름 저녁 바다의 블루’
                <br/>파란색은 우리에게 고요함과 안정을 주는 힘이 있어요.
                <br/>하지만 정작 식물과 꽃같은 자연에서는파란색을 찾아보기가 힘들죠.    
                <br/>바다의 파란색, 하늘의 파란색.
                <br/>파란색은 정작 손에는 잘 잡히지 않는 정말 신비한 색인것 같아요.</Text>
            </Absolute>
            <a href="https://www.instagram.com/paran__bada/"><LRiv mmt="24px" mjc="end">
                <Text mt    a="right">More About 유목이야기</Text>
                <Svg src={right}></Svg>
            </LRiv></a>
        </>
    )
}

export default Floodwood
