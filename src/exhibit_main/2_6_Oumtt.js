import React, {useEffect} from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import media from '../media'
import oumtt from '../assets/img/exhibit_main/oumtt.png'
import 생전시 from '../assets/img/exhibit_main/생 전시.png'

    const Btitle = styled.div`
        font-family: 'Eulyoo1945';
        font-weight: 400;
        font-size: 32px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #5E5E5E;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
        `}
    `;

    const Mtitle = styled.div`
        font-family: 'Eulyoo1945_semi' !important;
        font-weight: 600;
        font-size: 28px;
        line-height: 28px;
        text-align: ${(props)=>props.ta};
        color: ${(props)=>props.color};
        margin-top: ${(props)=>props.mt};
        margin-left: ${(props)=>props.ml};
        margin-right: ${(props)=>props.mr};
        ${media.mobile`
            font-size: 10px;
            line-height: 10px;
            margin: 0px;
            margin-top: ${(props)=>props.mmt};
        `}
    `;

    const Text = styled.div`
        font-size: 20px;
        line-height: 36px;
        line-height: ${(props)=>props.lh};
        font-family: ${(props)=>props.font};
        text-align: ${(props)=>props.ta};
        color: ${(props)=>props.color};
        margin-top: ${(props)=>props.mt};
        margin-left: ${(props)=>props.ml};
        margin-right: ${(props)=>props.mr};
        ${media.mobile`
            font-size: 8px;
            line-height: 14px;
            margin: 0px;
            margin-left: ${(props)=>props.mml};
            margin-top: ${(props)=>props.mmt};
        `}
    `;

    const Span = styled.span`
        font-family: 'Eulyoo1945_semi' !important;
        font-weight: 600;
    `

    const Img = styled.img`
        position: absolute;
        width: ${(props)=>props.w};
        height: ${(props)=>props.h};
        margin-top: ${(props)=>props.mt};
        margin-left: ${(props)=>props.ml};
        ${media.mobile`
            width: ${(props)=>props.mw};
            height: ${(props)=>props.mh};
            margin-top: ${(props)=>props.mmt};
            margin-left: ${(props)=>props.mml};
        `}
    `

function Oumtt() {

    useEffect(() => {
        AOS.init();
    }, []);    

    return (
        <>
            <Img w="422px" h="120px" mt="214px" ml="28px" mw="140px" mh="40px" mmt="52px" mml="5px" src={oumtt}></Img>
            <Img w="77px" h="285px" mt="706px" ml="811px" mw="26px" mh="102px" mmt="336px" mml="284px" src={생전시}></Img>
            {/* fade up, fade right, zoom out */}
            <Btitle>지금부터 당신이 가질 수 있는 궁금증들을 해결해 볼게요.</Btitle>
            <Mtitle color="#7C95C3" mt="88px" ta="right" mr="16px" mmt="72px">어떤 프로젝트팀인가요 ?</Mtitle>
            <div>
                <Text color="#7C95C3" ta="right" mt="120px" mr="16px" mmt="40px">누구나의 마음 속 예술을 움 틔우다.'
                <br/>우리는 ‘프로젝트 움트’ 입니다. '
                <br/><br/>누구나 예술을 느끼고, 사랑할 수 있다고 생각해요.
                <br/>누구나 예술가가 될 수도 있구요.
                <br/>그러한 일들을 만들어 가고 있어요.
                <br/><br/>관객에게 질문하고, 관객에게 다가가고, 예술가와 관객의 경계가 없는 그런 일이요.
                <br/>움트라는 프로젝트는, ‘관객 친화적이다’ 라는 생각을 갖도록 만들고 싶어요.</Text>
            </div>
            {/* fade left, zoom out */}
            <Mtitle color="#5E5E5E" mt="104px" ml="16px" ta="left" mmt="72px">왜? 공연이 아닌, 전시인가요?</Mtitle>
            <div>
                <Text lh="32px" color="#5E5E5E" mt="48px" ml="48px" mmt="40px" mml="12px">
                    결국, 당신에게 더 가까운 예술을 만들어보고 싶어요.
                <br/>무용에 대한 인식, 크게는 '예술의 방식에 대한 상상' 
                <br/>그 생각을 다르게 가져보고 싶어서요.</Text>
                <Text color="#5E5E5E" mt="80px" ml="48px" font="'Eulyoo1945_semi' !important" fw="600" mmt="26px" mml="12px">
                    "당신은 무용공연을 본 경험이 있나요?"
                    <br/>"당신은 전시를 본 경험이 있나요?"</Text>
            </div>
            {/* fade up */}
            <Mtitle color="#7C95C3" mt="120px" ta="center" mmt="64px">생 전시는 어떤 프로젝트인가요?</Mtitle>
            <div>
                <Text color="#7C95C3" mt="72px" ta="center" mmt="40px">
                    말 그대로 전시품이 아닌 生(살 생) 전시, <Span>살아있는 인간을 전시</Span>해요.
                <br/><br/>생 전시 프로젝트는, 무용예술의 다양한 문제점을 파악하여,
                <br/>보다 더 활성화를 시키기 위한 방안들을 실험하는 ‘연구 프로젝트’ 예요.
                <br/><br/>움트의 바램이었던, <Span>다양한 장르와의 Collaboration</Span>을 실현할 수 있게된 감사한 첫 발걸음이에요.
                <br/><br/>미술 장르의 Main Collaboration Artist_ Yuki 작가님과 함께,
                <br/>무용수의 Personal Color 를 주제로 전시 작업을 진행했어요.
                <br/><br/>무용수는 <Span>자신의 춤과 이야기를 통해 자신의 색</Span>을,
                <br/>작가님은 <Span>무용수의 본연의 색을 느껴, 다양한 Color 작품</Span>을 입혔어요.</Text>
            </div>
        </>
    )
}

export default Oumtt;