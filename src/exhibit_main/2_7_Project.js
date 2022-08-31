import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import "aos/dist/aos.css";
import right from '../assets/svg/right.svg'
import media from '../media'

    const Text = styled.div`
        font-size: 20px;
        line-height: 22px;
        color: #5E5E5E;
        text-align: ${(props)=>props.ta};
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
        `}
    `

    const Box = styled.div`
        width: 1024px;
        height: 120px;
        background-color: #E3E3E3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px 20px 24px;
        margin-top: 54px;
        ${media.mobile`
            width: 360px;
            height: 50px;
            margin-top: 48px;
            padding: 0px 16px 0px 16px;
        `}
    `

    const Text2 = styled.div`
        font-size: 16px;
        line-height: 16px;
        color: #5E5E5E;
        text-align: center;
        ${media.mobile`
            font-size: 6px;
            line-height: 6px;
        `}
    `

    const Text3 = styled.div`
        font-size: 20px;
        line-height: 24px;
        color: #898989;
        text-decoration: underline;
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
        `}
    `
    
    const Img = styled.img`
        margin-left: 10px;
        ${media.mobile`
            width: 3px;
            height: 6px;
        `}
    `

function Project() {

    return (
        <>
            <Text ta="right">더불어, 이번 프로젝트는 상업성 연계 실험으로써,
            <br/><br/>컨셉별 Collaboration 작업을 녹여낼 수 있게 되었답니다.
            <br/><br/>‘조향, 작곡, 의류 디자이너 브랜드 , 패션 디렉팅 -..'
            <br/><br/>모두가 움트의 뜻과 바램을 응원해주셨고,
            <br/><br/>소중하고 좋은 뜻을 가지고, 한 마음으로 열심히 준비하고 있습니다.
            <br/><br/>꿈만 같은 일들을 함께해주심에 감사하며,
            <br/><br/>결국, 모두에게 뜻 깊은 일이 될 수 있도록 나아가겠습니다.</Text>
            <Box>
                <Text2>* 해당 프로젝트는 무용수의 직업전환이 아닌,
                <br/><br/>전공을 통한 생계유지를 위한 기회를 만들어보기 위해
                <br/><br/>무용수를 브랜딩하기 위한 실험 프로젝트입니다.</Text2>
                <a href=''><Text3>Project Oumtt 상세 Page<Img src={right}></Img></Text3></a>
            </Box>
            {/* <Div>&lt;지난 프로젝트 영상&gt;</Div>
            <Div><Btitle>이번 프로젝트는 어떻게 구성되어 있나요?</Btitle></Div>
            <LRiv>
                <Div>
                    <Mtitle>&lt;생 전시3 - 미디어 영상 전시&gt;</Mtitle>
                    <Text>브랜드를 찾아요. 무용수와 어울리는 옷을요.</Text>
                    <Text>영상 작품화 작업을 진행해요.</Text>
                    <Text>무색 전시로, Basic 의상과 있는 그대로 자연스러운</Text>
                    <Text>무용수의 모습을</Text>
                    <Text>영상작품으로 올릴예정이에요.</Text>
                </Div>
                <Div>
                    <Mtitle>&lt;생 전시4 - 관객 관람 전시&gt;</Mtitle>
                    <Text>의상의 컬러 작업을 진행해요.</Text>
                    <Text>그림으로 무용수를 표현해요.</Text>
                    <Text>무용수의 작품과 Personal Color에 가장 어울리게요.</Text>
                    <Text>무용수의 작품과 어우러지는 곡작업을 진행해요.</Text>
                    <Text>마지막으로, 무용수의 이야기를 채우기 위한 전시장 구성을 연출해요.</Text>
                </Div>
            </LRiv>
            <Div>
                <Mtitle>이번 Personal Color_Blue 전시를 소개해주세요.</Mtitle>
                <Mtitle>EXHIBITION Specific Info.</Mtitle> 
                <Stitle>[Personal Color Blue _ 배 소 현]</Stitle> 
                <Text>- 한양대학교 무용학과 재학</Text>
                <Text>- 현대무용 전공 </Text>
            </Div> */}
            {/* <Div>
                <Img src={배소현}></Img>
                <Text>안녕하세요.</Text>
                <Text>분주한 삶을 오롯이 살아내고 있는 배소현입니다.</Text>
                <Text>이 춤을 추게 된 배경에는 나를 잘 알지 못하는</Text>
                <Text>나 자신에 대한 이유없는 힘겨움과 괴로움과 외로움이 있습니다.</Text>
                <Text>이랬다 저랬다. 왔다 갔다.</Text>
                <Text>분주하고 어렵고, 외로운 그것이었습니다.</Text>
                <Text>어렸을 때부터 괜시리 외로움을 잘 느꼈지만 굳이 그것을 티내지 않았고</Text>
                <Text>그렇게 혼자서도 꿋꿋이 하루하루를 이겨내는 어른이 되어버렸습니다.</Text>
                <Text>하지만, 뭘까요</Text>
                <Text>이 채워지지 않는 이 마음은</Text>
                <Text>벗어나려 하고 밀어내려 해도</Text>
                <Text>깊은 푸른 바다처럼 마음 속 깊이 내려앉을 뿐이었습니다.</Text>
                <Text>이제는 이 이유없는 이들을 마주하고</Text>
                <Text>함께 춤을 추고, 이를 데리고 나아가려 합니다.</Text>
                <Text>그를 마주하는 것이 오히려 따듯한 사람이 아닐까요?</Text>
                <Text>제가 데리고 다니는 이 감정을 파란색에 비추어보았습니다.</Text>
                <Text>당신의 파란색은 무엇인가요?</Text>
            </Div>
            <Div>
                <Btitle>언제, 어디에서 진행하나요 ?</Btitle>
                <Text>*청년 예술인의 지속가능한 창작활동을 위한,</Text>
                <Text>청년예술청 SAPY의 White 관에서 진행할 예정이에요!</Text>
                <Text>2022년 9월 4일 - 5일 ( 토 , 일 ) 청년예술청 SAPY White Room</Text>
                <Text>서울시 서대문구 충정로3가480 어바니엘 충정로 102동 B2층</Text>
                <Text>(충정로역 2,5호선)</Text>
                <Text>청년예술청 네이버 지도</Text>
                <Text>네이버지도!!</Text>
            </Div> */}
        </>
    )
}

export default Project;