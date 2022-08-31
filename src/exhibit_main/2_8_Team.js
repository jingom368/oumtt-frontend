import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import '../assets/css/human_main/2_8_Team.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import Bian from '../assets/img/exhibit_main/Bian.png'
import Yuki from '../assets/img/exhibit_main/Yuki.png'
import media from '../media'

    const Grid = styled.div`
        display: grid;
        grid-template-columns: 476px 476px;
        grid-template-rows: 600px 600px;
        column-gap: 24px;
        row-gap: 160px;
        margin-top: 224px;
        ${media.mobile`
            grid-template-columns: 156px 156px;
            grid-template-rows: 196px 196px;
            column-gap: 16px;
            row-gap: 72px;
            margin-top: 88px;
        `}
    `

    const Btitle = styled.div`
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 0.1em;
        color: #5E5E5E;
        text-align: center;
        ${media.mobile`
            font-size: 14px;
            line-height: 14px;
        `}
    `;

    const Mtitle = styled.div`
        font-family: 'Eulyoo1945_semi' !important;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
        text-align: ${(props)=>props.ta};
        letter-spacing: 0.1em;
        color: #5E5E5E;
        margin-top: 36px;
        margin-right:${(props)=>props.mr};
        margin-left:${(props)=>props.ml};
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
            margin: 0px;
            margin-top: 4px;
            margin-right:${(props)=>props.mmr};
            margin-left:${(props)=>props.mml};
        `}
    `;

    const Text = styled.div`
        font-size: 20px;
        line-height: 25px;
        color: #5E5E5E;
        text-align: ${(props)=>props.ta};
        margin-top:${(props)=>props.mt};
        margin-right:${(props)=>props.mr};
        margin-left:${(props)=>props.ml};
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
            margin: 0px;
            margin-top: 16px;
            margin-right:${(props)=>props.mmr};
            margin-left:${(props)=>props.mml};
        `}
    `

    const Text1 = styled.div`
        font-size: 20px;
        line-height: 20px;
        color: #5E5E5E;
        text-align: ${(props)=>props.ta};
        margin-top: ${(props)=>props.mt};
        ${media.mobile`
            font-size: 6px;
            line-height: 6px;
            margin-top: ${(props)=>props.mmt};
        `}
    `

    const Img = styled.img`
        width: ${(props)=>props.w};
        heigth: ${(props)=>props.h};
        display: ${(props)=>props.display};
        position: ${(props)=>props.position};
        object-fit: cover;
        ${media.mobile`
            width: ${(props)=>props.mw};
            heigth: ${(props)=>props.mh};
        `}
    `;

    const Teams = styled.div`
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        text-align: right;
        letter-spacing: -0.03em;
        color: #9CC5C1;
        margin-top: 275px;
        margin-right: 24px;
        ${media.mobile`
            font-size: 14px;
            line-height: 14px;
            margin-top: 64px;
            margin-right: 0px;
        `}
    `

    const Grid2 = styled.div`
        display: grid;
        grid-template-columns: 284px 379px 265px;
        grid-template-rows: 391px 30px;
        column-gap: 24px;
        row-gap: 48px;
        margin-top: 64px;
        ${media.mobile`
            grid-template-columns: 95px 128px 89px;
            grid-template-rows: 130px 10px;
            column-gap: 8px;
            row-gap: 16px;
            margin-top: 24px;
        `}
    `

    const Text2 = styled.div`
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #5E5E5E;
        ${media.mobile`
            font-size: 10px;
            line-height: 10px;
        `}
    `

function Team() {

    useEffect(() => {
        AOS.init();
    }, []);    

    const [imgchange, setImgChange] = useState('_image_none')

    const team = [
        {w: '284px', mw: '95px', name: 'Nayeon'},
        {w: '379px', mw: '128px', name: 'Daeyoung'}, 
        {w: '265px', mw: '89px', name: 'Jinung'}
    ]
    const img = []
    for(let i=0; i<team.length; i++) {
        img.push(
            <Img w={team[i].w} h="391px" mw={team[i].mw} mh="130px" srcSet={require('../assets/img/exhibit_main/'+ team[i].name + imgchange + '.png')} onClick={() => SetActive()}></Img>
        )
    }

    function SetActive () {
        if (imgchange === '_image_none') {
            setImgChange('_image_active')
        } else {
            setImgChange('_image_none')
        }
    }

    return (
        <>
            <Btitle>Project Oumtt X Artist Yuki</Btitle>
            <Grid>
                <div>
                    <Mtitle ta="right" mr="48px" mmr="8px">Bian Kim</Mtitle>
                    <Text ta="right" mt="36px" mr="48px" mmr="8px">프로젝트 움트 기획대표
                    <br/><br/><br/><br/>서울 한양대학교 무용학과 학사 졸업
                    <br/><br/>서울 한양대학교 무용학 석사 수료 </Text>
                    <Text1 ta="left" mt="144px" mmt="52px">2019 -2022 Kum Dance Company
                    <br/><br/>2022 프로젝트 움트 생 전시1 총괄기획
                    <br/><br/>2022 프로젝트 움트 생 전시2 총괄기획
                    <br/><br/>2022 프로젝트 움트 Nature SeoulForestival 총괄기획
                    </Text1>
                </div>
                <Img w="476px" h="600px" mw="156px" mh="196px" src={Bian}/>
                <Img w="476px" h="600px" mw="156px" mh="196px" js="left" src={Yuki}/>
                <div>
                    <Mtitle ta="left" ml="48px">Yuki Jin</Mtitle>
                    <Text ta="left" mt="36px" ml="48px">뮤스 엔터테인먼트 기획팀 총괄기획
                    <br/><br/><br/><br/>홍익대학교 조소과 학사 졸업 
                    <br/><br/>Figure Artist &amp; Photographer</Text>
                    <Text1 ta="right" mt="96px" mmt="36px">2018 &lt;香캘러리 개인 초대전&gt;
                    <br/><br/>2018  &lt;KING-ZONE Culture  Co., Ltd&gt;
                    <br/><br/>캐스팅&amp;방송 컨텐츠 기획
                    <br/><br/>2020 &lt;제 14회 원드뷰티아트&amp;디자인 
                    <br/><br/>국제공모전 일러스트 부문 국회의원상&gt;
                    <br/><br/>2021 -2022 (주)테크팜 피규어 채색팀 </Text1>
                </div>
            </Grid>
            <Teams>Project Oumtt Team</Teams>
            <Grid2>
            {img}
            <Text2>Nayeon Baek</Text2>
            <Text2>Daeyoung Seong</Text2>
            <Text2>Jinung Jang</Text2>
            </Grid2>
        </>
    )
}

export default Team;