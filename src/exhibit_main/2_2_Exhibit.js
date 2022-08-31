import React, {useEffect} from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import sohyun from '../assets/img/exhibit_main/sohyun1.png'
import media from '../media'

    const Div = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const STitle = styled.div`
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        color: #363636;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
        `}
    `;

    const Text = styled.div`
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #7A8082;
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
        `}
    `;

    const Text1 = styled(Text)`
        margin-top: 288px;
        text-align: left;
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
            margin-top: 96px;
        `}
    `

    const Span = styled.span`
        color: #5E5E5E;
    `
    
    const Text2 = styled(STitle)`
        margin-top: 256px;
        color: #363636;
        text-align: center;
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
            margin-top: 92px;
        `}
    `

    const Text3 = styled(Text)`
        margin-top: 96px;
        text-align: center;
        ${media.mobile`
            font-size: 8px;
            line-height: 8px;
            margin-top: 32px;
        `}
    `

    const Img = styled.img`
        position: absolute;
        width: 476px;
        heigth: 552px;
        margin-top: 60px;
        margin-left: 228px;
        ${media.mobile`
            width: 156px;
            heigth: 180px;
            margin-top: 28px;
            margin-left: 86px;
        `}
    `

function Exhibit() {

    useEffect(() => {
        AOS.init();
    }, []);    

    return (
        <>
            <Img src={sohyun}></Img>
            <Div>
                <STitle data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">당신에게 전시는 무엇인가요?</STitle>
                <Text1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">우리는 <Span>무용수를 전시</Span>합니다.
                <br/><br/>가장 좋아하는 색을 가득 - 히 채워서요.</Text1>
                <Text2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">경험하면, 기억할 수 밖에 없도록 기획했습니다.</Text2>
            </Div>
            <Div>
                <Text3 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">당신이 좋아하는 색이 당신만의 색이 될 수 있게.
                <br/><br/>우리가 좋아하는 춤과 예술이 당신만의 경험이 될 수 있게.</Text3> 
            </Div>
        </>
    )
}

export default Exhibit;