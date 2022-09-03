import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import Vestebro_b from '../assets/img/exhibit_program/Vestebro_b.png'
import Vestebro_l from '../assets/img/exhibit_program/Vestebro_l.png'
import right from '../assets/svg/right2x4_97A287.svg'

const Mtitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #97A287;
        text-align: right;
    `}
`

const Text = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 8px;
        line-height: 8px;
        color: #97A287;
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
        color: #97A287;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
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

const Img = styled.img`
    ${media.mobile`
        width: ${(props)=>props.mw};
        height: ${(props)=>props.mh};
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
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

const Vestebro = () => {
    return (
        <>
            <Mtitle>Furniture</Mtitle>
            <Text mmt="4px" mta="right">Vestebro</Text>
            <LRiv mmt="16px">
                <Img src={Vestebro_b} mw="216px" mh="216px" mml="40px"></Img>
                <Img src={Vestebro_l} mw="20px" mh="25px" mml="20px"></Img>
            </LRiv>
            <Text mmt="32px">Objet Info.</Text>
            <LRiv mmt="24px">
                <a href="https://vestebro.com/product/shell-3/29/category/47/display/1/"><LRiv>
                    <SText mml="38px">SWAN 1600</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
                <a href="https://vestebro.com/product/shell-1/27/category/47/display/1/"><LRiv>
                    <SText mml="69px">SHELL 1</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
                <a href="https://vestebro.com/product/shell-stool/30/category/47/display/1/"><LRiv>
                    <SText mml="69px">SHELL STOOL</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
            </LRiv>
            <SText mta="center" mmt="24px">'온전한 휴식'에 대한 고민에서 출발한 디자인 소파입니다. 모든면을 곡선형으로
            <br/>뒷모습마저도 둥근 모습으로 표현한 쉘소파는 
            <br/>1970년대 빈티지 디자인에서 오마쥬 된제품입니다. 
            <br/>
            <br/>자연 속 바닷가 조개 형상을 담은 쉘(shell)의 디자인은 자연의 평온함을
            <br/>담은 듯, 온전한 휴식을 선사합니다.</SText>
            <Line mmt="23.5px"></Line>
            <Text mta="center" mmt="24px">Brand Info.</Text>
            <SText mta="left" mmt="24px">베스테브로는 일상에 영감을 주며, 
            <br/>마음을 격려해주는 라이프스타일 오브제를 만드는 디자인 가구 회사입니다.
            <br/>
            <br/>의미와 편안함을 찾아 기대와 꿈을 꾸게 해주며, 
            <br/>우리 자신을 위한 공간이 있는 균형 잡힌 삶을 지향합니다.
            <br/>
            <br/>고객이 진정으로 편안하게 느낄 수 있는 공간을 생각하며
            <br/>긴장을 풀고 삶의 휴식을 위한 가구를 디자인 하기위해 노력합니다.
            <br/>
            <br/>또한, 소중함의 가치를 더 아름답고 덜 복잡하게 세상에 전달하고 싶습니다.</SText>
            <LRiv mmt="24px">
                <Img src={Vestebro} mw="96px" mh="136px" mml="32px"></Img>
                <SText mta="right" mml="30px" mmt="32px">재료와 공정에서 생산및 배송에 이르기까지
                <br/>우리는 아름다운 미래를 형성하고 
                <br/>책임감 있는 선택을 더 쉽게 할 수 있도록 최선을 다할것입니다.
                <br/>
                <br/>"긍정적인 변화를 위한 계획 - 더 나은 내일을 위하여"
                <br/>Initiatives for Positive Change - For a Better Tomorrow</SText>
            </LRiv>
            <Text mta="center" mmt="24px">Personal Colors</Text>
            <SText mta="center" mmt="16px">색에 대한 고민은 디자이너로써 끊임없는 탐색입니다. 
            <br/>머리 속 상상으로 그려지 색감이 색이라는 특정 칼라로 실현되었을 때! 
            <br/>남다른 희열을 느낍니다. 
            <br/>
            <br/>색이란 나를 표현한는 수단이자 
            <br/>누군가의 삶을 담아내는 수단이자 창구이기도 하죠. 
            <br/>
            <br/>상상을 현실로 만드는 창의적 영감을 전달하는 컬러!  색에 대한 상상력을 무한합니다</SText>
            <a href="https://vestebro.com/"><LRiv mjc="end" mmt="24px">
                <Text mta="right">More About Vestebro</Text>
                <Svg mw="4px" mh="8px" src={right}></Svg>
            </LRiv></a>
        </>
    )
}

export default Vestebro
