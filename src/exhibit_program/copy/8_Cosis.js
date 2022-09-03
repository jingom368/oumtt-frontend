import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import Cosis_p from '../assets/img/exhibit_program/Cosis_p.png'
import Cosis_l from '../assets/img/exhibit_program/Cosis_l.png'
import right from '../assets/svg/right2x4_007681.svg'

const Mtitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #00677F;
        text-align: right;
    `}
`

const Text = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 8px;
        line-height: 8px;
        color: rgba(0, 118, 129, 0.6);
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
        color: ${(props)=>props.mmt};
    `}
`

const SText = styled.div`
    ${media.mobile`
        font-weight: 400;
        font-size: 6px;
        line-height: 12px;
        color: rgba(0, 118, 129, 0.6);
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

const Cosis = () => {
    return (
        <>
            <Mtitle>Carpet</Mtitle>
            <Text mcolor="#00677F" mta="right" mmt="4px">Cosis</Text>
            <Img src={Cosis_l} mw="89px" mh="16px" mmt="32px"></Img>
            <Img src={Cosis_p} mw="312px" mh="128px" mmt="16px"></Img>
            <Text mmt="16px">Object Info.</Text>
            <LRiv mmt="24px">
                <a href="https://jazzy-second-e86.notion.site/Cosis-Carpet-501948dcb1464a50b9d6a6df72f0754c#8c66210380d04d81b7be9fdc74ff2d10"><LRiv>
                    <SText mml="63px">COSIS Custom Carpet</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
                <a href="https://jazzy-second-e86.notion.site/Cosis-Carpet-501948dcb1464a50b9d6a6df72f0754c#1ca6271f4afb49f2973b73daffb45a5e"><LRiv>
                    <SText mml="84px">Design Series V</SText>
                    <Svg mw="3px" mh="6px" mmt="3px" src={right}></Svg>
                </LRiv></a>
            </LRiv>
            <Line mmt="39.5px"></Line>
            <Text mta="center" mmt="24px">Brand Info.</Text>
            <SText mta="center" mmt="16px">글로벌 브랜드 기반의 카페트,
            <br/>LVT 및 인테리어 바닥재 공급 시공 전문기업
            <br/>
            <br/>2000년 설립 이래 20년 이상의 경영 노하우를 쌓고 동종업계
            <br/>선두주자로써 국내 및 해외 유수 관공서,기업, 호텔, 리조트 등
            <br/>각종 상업/업무/주거공간의 주요 카페트, LVT, 바닥재 납품 시공을
            <br/>전문으로 하고 있습니다.</SText>
            <SText mta="center" mmt="40px">선한 영향력이 함께 했던 시간.
            <br/>
            <br/>특별한 전시, 특별한 사람, 특별한 프로젝트를 함께 할 수 있다는 감사함이 먼저였습니다.
            <br/>예술가 분들의 뜻있는 전시에 저희 제품이 함께 전시되어 ‘방문하는 관람객분들로 하여금
            <br/>더욱 깊은 영감을 얻어가실 수 있다면, 그렇게 또 다른 재미있는 프로젝트가 발생할 수 있다면’ 이라는
            <br/>영광스러운 기대감과 설레임으로 함께했습니다.
            <br/>
            <br/>때문에 프로젝트 움트 기획자분들과의 첫 만남부터 제품을 선정하고
            <br/>준비하는 과정에 이르기까지 매우 즐거운 시간이었습니다.
            <br/>
            <br/>아름답고 우수한 우리의 제품을 어떻게 알리고 홍보할 것인가는 모든 기업의 숙제 중 하나라고 생각합니다
            <br/>이와 같은 상황 속에서 프로젝트 움트의 첫 컨텍은 실로 반가웠고  작가분들과의 협업을 통해 저희 제품을
            <br/>긍정적으로, 색다른 방법으로 알릴 수 있다는 점에 큰 매력을 느끼게 되었습니다.
            <br/>
            <br/>금번 전시 이후로도 다양한 전시 프로젝트에 함께 협업하며
            <br/>서로가 선한 영향력을 발휘할 수 있기를 희망합니다.
            <br/>
            <br/>- ㈜코시스 장희정 과장</SText>
            <Line mmt="23.5px"></Line>
            <a href="http://www.icosis.net/src/"><LRiv mjc="end" mmt="24px">
                <Text mta="right">More About Cosis</Text>
                <Svg mw="4px" mh="8px" src={right}></Svg>
            </LRiv></a>
        </>
    )
}

export default Cosis
