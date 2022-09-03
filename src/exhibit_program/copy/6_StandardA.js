import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import StandardA_p from '../assets/img/exhibit_program/StandardA_p.png'
import right from '../assets/svg/right2x4_5E5E5E.svg'

const Btitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        color: #5E5E5E;
    `}
`

const Mtitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #5E5E5E;
        margin-top: 16px;
        text-align: right;
    `}
`

const Text = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 8px;
        line-height: 8px;
        color: #5E5E5E;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
    `}
`

const SText = styled.div`
    ${media.mobile`
        font-weight: 400;
        font-size: 6px;
        line-height: 12px;
        color: #5E5E5E;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
    `}
`

const Img = styled.img`
    ${media.mobile`
        width: 328px;
        height: 144px;
        margin-top: ${(props)=>props.mmt};
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

const Line = styled.div`
    ${media.mobile`
        width: 216px;
        height: 0.5px;
        border-top: 0.5px solid #97A287;
        margin-left: ${(props)=>props.mml};
        margin-top: ${(props)=>props.mmt};
        align-self: center;
    `}
`

const Svg = styled.img`
    ${media.mobile`
        width: ${(props)=>props.mw};
        height: ${(props)=>props.mh};
        margin-top: ${(props)=>props.mmt};
        margin-left: 4px;
    `}
`

const StandardA = () => {
    return (
        <>
            <Btitle>Collaboration Brand</Btitle>
            <Mtitle>Furniture</Mtitle>
            <Text mmt="8px" mta="right">Standard. a</Text>
            <Img mmt="16px" src={StandardA_p}></Img>
            <Text mmt="16px" mta="left">Object Info.</Text>
            <LRiv mmt="24px">
                <a href="http://standard-a.co.kr/collection/magazine-shelf-2/"><LRiv>
                    <SText mml="27px">Magazine Shelf</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
                <a href="http://standard-a.co.kr/collection/chair-02/"><LRiv>
                    <SText mml="72px">Chair 02</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
                <a href="http://standard-a.co.kr/collection/chair-05/"><LRiv>
                    <SText mml="80px">Chair 05</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
            </LRiv>
            <Line mmt="39.5px"></Line>
            <Text mmt="24px" mta="center">Brand Info.</Text>
            <SText mmt="16px" mta="center">정직한 첫 번째 제안</SText>
            <SText mmt="24px" mta="center">제작자의 노력과 고민은 제품의 수명으로 고스란히 이어집니다.
            <br/>소재와 기능에 대한 경험과 주의 깊은 선택을 통해 만족할 만한 품질을 이끌어내는 일. 
            <br/>우리의 단순한 원칙입니다. 이를 바탕 삼아 건네는 정직한 제안, 스탠다드에이입니다.</SText>
            <Text mmt="56px" mta="center">Personal Colors</Text>
            <SText mmt="16px" mta="center">사람을 색으로 표현하는것은 참 어렵다고 생각합니다. 
            <br/>스쳐지나가는 사람이라면 스쳐지나가는 찰나의 느낌을 색으로 말 할 수 있을테지만 
            <br/>매일보는 색이라면 매일의 색이 다를테니까요.
            <br/>하물며 나의색은 무엇인가라는 질문은 너무 어렵네요. 
            <br/>혈액형이나 MBTI처럼 쉽고 간단하게 판단 할 수 있는 질문들이 있다면 좋겠습니다.
            <br/>
            <br/>- 한동안 화장품회사에서 컬러들을 고를때 제주돌담색, 
            <br/>딸기우유색처럼 사물의 색이나 느낌을 빌려와 색을 말하곤 했으니 
            <br/>굳이 저도 답변을 쓰는 지금 나의 색을 대답한다면 
            <br/>'단답형대답불가'색으로 답 할 수 있겠네요.</SText>
            <Line mmt="23.5px"></Line>
            <a href="http://standard-a.co.kr/"><LRiv mjc="end" mmt="24px">
                <Text mta="right">More About Standard. a</Text>
                <Svg mw="4px" mh="8px" src={right}></Svg>
            </LRiv></a>
        </>
    )
}

export default StandardA
