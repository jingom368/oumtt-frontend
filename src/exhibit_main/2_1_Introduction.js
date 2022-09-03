import React, { useEffect } from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'
import { useMediaQuery } from "react-responsive"

    // const Text = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     margin-left: 28px;
    //     font-weight: 600;
    //     font-size: 140px;
    //     line-height: 170px;
    //     text-align: center;
    //     letter-spacing: 0.16em;
    //     color: #DEECEF;
    //     filter: blur(4px);
    //     text-shadow: 0px 5px 10px rgba(0,0,0,0.23);
    // `

    const Div = styled.div`
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
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
        ${media.mobile`
            width: 120px;
            height: 32px;
            border-radius: 8px;
            font-size: 12px;
            line-height: 12px;
        `}
    `    

function Introduction() {

    useEffect(() => {
        setTimeout(function() {
            let Height = (document.getElementsByTagName('img')[0].height)*0.45;
            console.log(Height)
            document.getElementsByTagName("button")[1].style.marginTop = Height+"px";
            window.addEventListener('resize', () => { 
                let Height = (document.getElementsByTagName('img')[0].height)*0.45;
                console.log(Height)
                document.getElementsByTagName("button")[1].style.marginTop = Height+"px";
            }, true);
        }, 0)
    }, [])

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
        <>
            <Div>
            <Button onClick={() =>{ScrollToTop()}}>관람 예약하기</Button>
            </Div>
        </>
    )
}

export default Introduction;