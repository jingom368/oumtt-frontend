import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import right from '../assets/svg/right2x4.svg'

const Btitle = styled.div`
    ${media.mobile`
        font-family: 'Maitree' important!;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.5);
    `}
`

const Line = styled.div`
    ${media.mobile`
        width: 328px;
        border: 0.5px solid rgba(255, 255, 255, 0.5);
        margin-top: 11px;
    `}
`

const LRiv = styled.div`
    ${media.mobile`
        display: flex;
        flex-direction: row;
    `}
`

const Img = styled.div`
    ${media.mobile`
        width: 129px;
        height: 168px;
        margin-left: 16px;
        margin-top: 24px;
    `}
`

const Div = styled.div`
    ${media.mobile`
        display:flex;
        flex-direction: column;
    `}
`

const Mtitle = styled.div`
    ${media.mobile`
        font-size: 12px;
        line-height: 12px;
        color: ${(props)=>props.mcolor};
        text-align: ${(props)=>props.mta};
        margin-top: ${(props)=>props.mmt};
        margin-right: ${(props)=>props.mmr};
    `}
`

const Text = styled.div`
    ${media.mobile`
        font-size: 8px;
        line-height: 8px;
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
        width: 4px;
        heigth: 8px;
        margin-left: 4px;
    `}
`

const Yuki = () => {
    return (
        <>
            <Btitle>Collaboration Artists</Btitle>
            <Line></Line>
            <LRiv>
                <Img src={Yuki} />
                <Div>
                    <Mtitle mcolor="rgba(222, 236, 239, 0.8)" mta="right" mmt="32px" mmr="16px">Main Artist</Mtitle>
                    <Text mcolor="rgba(222, 236, 239, 0.8)" mta="right" mmt="8px" mmr="16px">Yuki Jin</Text>
                    <Text mcolor="rgba(222, 236, 239, 0.8)" mta="right" mmt="32px" mmr="16px">Drawing ,Photo, Costume</Text>
                    <Text mcolor="rgba(222, 236, 239, 0.8)" mta="right" mmt="48px" mmr="16px" mlh="12px">
                        Meus Art Album Project 총괄기획
                    <br/>홍익대학교 조소과 학사 졸업 
                    <br/>Figure Artist & Photographer 
                    </Text>
                </Div>
            </LRiv>
            <Text mcolor="#FFFFFF" mta="center" mmt="64px">배소현 무용수는 생각이 깊은 사람이다.</Text>
            <Text mcolor="#FFFFFF" mta="center" mmt="96px" mlh="16px">그녀가 좋아하는 파란 물감으로 
            <br/>그 깊이를  표현해 보고 싶었다.</Text>
                <Text mcolor="#FFFFFF" mta="right" mmt="131px" mfs="6px" mlh="10px">More About Yuki Page</Text>
                <Svg src={right} />
            <Mtitle mcolor="#FFFFFF" mta="center" mmt="75px">Music Composer</Mtitle>
        </>
    )
}

export default Yuki
