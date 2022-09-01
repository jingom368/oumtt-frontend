import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'

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
        line-height: ${(props)=>props.mlh};
    `}
`

const Line = styled.div`
    ${media.mobile`
        width: 120px;
        border: 0.5px solid rgba(255, 255, 255, 0.5);
        margin-top: 48px;
    `}
`

const Floodwood = () => {
    return (
        <>
            <Mtitle>Floodwood</Mtitle>
            <LRiv>
                <Text mmt="4px">유목이야기</Text>
                <Line></Line>
            </LRiv>
            <Img src={nuri}></Img>
            <Text>Nuri Kim</Text>
            <Text>오직 자연과 세월이 만든 유목.
            <br/>세상에 하나뿐인, 바다가 준 선물</Text>
            <Img src={Floodwood}></Img>
            <Text>Objet Info.</Text>
            <Line></Line>
            <Text>Personal Colors</Text>
            <Text>‘여름 저녁 바다의 블루’
            <br/>파란색은 우리에게 고요함과 안정을 주는 힘이 있어요.
            <br/>하지만 정작 식물과 꽃같은 자연에서는파란색을 찾아보기가 힘들죠. 
            <br/>바다의 파란색, 하늘의 파란색.
            <br/>파란색은 정작 손에는 잘 잡히지 않는 정말 신비한 색인것 같아요.</Text>
            <Text>More About 유목이야기</Text>
        </>
    )
}

export default Floodwood
