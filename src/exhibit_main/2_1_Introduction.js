import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import { useMediaQuery } from "react-responsive"

    const Div = styled.div`
        display: flex;
        justify-content: center;
    `

    const Button = styled.button`
        width: 310px;
        height: 64px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px -1px 4px rgba(255, 255, 255, 0.12), 0px 2px 16px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(4px);
        border-radius: 12px;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.04em;
        color: #6B9FFF;
        margin-top: calc(180%);
        ${media.mobile`
            width: 120px;
            height: 32px;
            border-radius: 8px;
            font-size: 12px;
            line-height: 12px;
            margin-top: calc(180%);
        `}
    `    

function Introduction() {

    const isMobile = useMediaQuery({
        query : "(max-width:1023px)"
    });
    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
    });

    const ScrollToTop = () => {
        if (isMobile) {
            window.scrollTo(0, 1226);
        }
        if (isPc) {
            window.scrollTo(0, 3425);
        }
    }

    return (
        <Div>
            <Button onClick={() =>{ScrollToTop()}}>관람 예약하기</Button>
        </Div>
    )
}

export default Introduction;