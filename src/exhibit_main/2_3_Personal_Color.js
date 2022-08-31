import React, {useEffect} from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import AOS from 'aos';
import "aos/dist/aos.css";  
import Personal_Colors from '../assets/img/exhibit_main/Personal_Colors.png'
import media from '../media'

    const TextPng = styled.img`
        width: 596px;
        height: 108px;
        align-self: flex-start;
        margin-bottom: 24px;
        ${media.mobile`
            width: 200px;
            height: 36px;
        `}
    `

    const Iframe = styled.iframe`
        &:nth-child(3) {
            display: none;
        }
        ${media.mobile`
            &:nth-child(2) {
                display: none;
            }
            &:nth-child(3) {
                display: flex;
            }
        `}        
    `

    const Mtitle = styled.div`
        font-size: 28px;
        margin-top: 24px;
        letter-spacing: -0.03em;
        color: #5E5E5E;
        ${media.mobile`
            font-size: 12px;
            margin-top: 16px;
        `}        
    `;

    const Text = styled.div`
        font-size: 22px;
        line-height: 20px;
        margin-top: 128px;
        text-align: right;
        color: #7A8082;
        opacity: 0.7;
        letter-spacing: -0.03em;
        ${media.mobile`
            font-size: 8px;
            margin-top: 40px;
            line-height: 8px;
        `}        
    `;
    

function PersonalColor() {

    useEffect(() => {
        AOS.init();
    }, []);  

    return (
        <>
            <TextPng src={Personal_Colors}></TextPng>
            <Iframe width="976" height="512" src="https://www.youtube.com/embed/uRaPUP68uR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            <Iframe width="328" height="184" src="https://www.youtube.com/embed/uRaPUP68uR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            <Mtitle>당신에게 퍼스널 컬러는 어떠한 의미인가요?</Mtitle>
            <Text>'우리가 아는 퍼스널 컬러는, 내게 사회적인 색이 될 수도 있다.'
            <br/><br/>'내가 좋아하는 색이, 곧 나와 어울리는 색이 되도록'
            <br/><br/>'사실, 모든 색은 다 어울릴 수 있게 할 수 있다고 봐'
            <br/><br/>'나 고유의 색? 온전히 나를 드러낼 수 있는 색?''</Text>
        </>
    )
}

export default PersonalColor;