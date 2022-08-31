import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import sohyun from '../assets/img/exhibit_main/sohyun.png'
import hasom from '../assets/img/exhibit_main/hasom.png'
import cheolhan from '../assets/img/exhibit_main/cheolhan.png'
import media from '../media'

    const Div = styled.div`
        display: flex;
        flex-direction: row;
    `

    const Btitle = styled.div`
        font-family: 'Maitree' !important;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -0.03em;
        color: rgba(156, 197, 193, 0.55);
        ${media.mobile`
            font-size: 16px;
            line-height: 16px;
        `}
    `

    const Container = styled.div`
        display: grid;
        grid-template-columns: 309px 310px 309px;
        grid-template-rows: 400px 84px;
        column-gap: 24px;
        row-gap: 24px;
        margin-top: 56px;
        place-items: center;
        ${media.mobile`
            display: none;
        `}
    `
    
    const Container1 = styled.div`
        display: none;
        ${media.mobile`
            display: grid;
            grid-template-rows: 52px 202px 52px;
            row-gap: 24px;
            margin-top: 99px;
            place-items: center;
        `}
    `

    const Container2 = styled.div`
        display: none;
        ${media.mobile`
            display: grid;
            grid-template-rows: 202px 52px 202px;
            row-gap: 24px;
            margin-top: 24px;
            place-items: center;
            margin-left: 16px;
        `}
    `

    
    const Img = styled.img`
        width: 100%;
        height: 400px;
        object-fit: cover;
        ${media.mobile`
            width: 156px;
            height: 202px;
        `}
    `;

    const Button = styled.button`
        width: 252px;
        height: 84px;
        text-align: center;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px -1px 4px rgba(255, 255, 255, 0.12), 0px 2px 16px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(4px);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        ${media.mobile`
            width: 156px;
            height: 52px;
            border-radius: 8px;
        `}
    `;

    const Text = styled.div`
        font-family: 'Maitree' !important;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        color: ${(props)=>props.Color};
        ${media.mobile`
            font-size: 12px;
            line-height: 12px;
        `}
    `

    const Text1 = styled(Text)`
        filter: blur(4px);
        line-height: 30px;
        position: absolute;
        margin-top: 2px;
        ${media.mobile`
            font-size: 12px;
            line-height: 14px;
        `}
    `

function Picture() {

    return (
        <>
            <Btitle>Personal Colors List |</Btitle>
            <Container>
                <Img src={sohyun}></Img>
                <Img src={hasom}></Img>
                <Img src={cheolhan} ></Img>
                <Button>
                    <Text Color="rgba(68, 138, 255, 0.3)">Color_Blue 
                    <br/>배 소 현</Text>
                    <Text1 Color="rgba(68, 138, 255, 0.3)">Color_Blue
                    <br/>배 소 현</Text1>
                </Button>        
                <Button>
                    <Text Color="#FFE690">Color_Yellow
                    <br/>오 하 솜</Text>
                    <Text1 Color="#FFE690">Color_Yellow
                    <br/>오 하 솜</Text1>
                </Button> 
                <Button>
                    <Text Color="rgba(77, 96, 163, 0.2)">Color_Ash Blue
                    <br/>정 철 한</Text>
                    <Text1 Color="rgba(77, 96, 163, 0.2)">Color_Ash Blue
                    <br/>정 철 한</Text1>
                </Button>
            </Container>
            
            <Div>
                <Container1>
                    <Button>
                        <Text Color="rgba(68, 138, 255, 0.3)">Color_Blue 
                        <br/>배 소 현</Text>
                        <Text1 Color="rgba(68, 138, 255, 0.3)">Color_Blue
                        <br/>배 소 현</Text1>
                    </Button>  
                    <Img src={hasom}></Img>
                    <Button>
                        <Text Color="rgba(77, 96, 163, 0.2)">Color_Ash Blue
                        <br/>정 철 한</Text>
                        <Text1 Color="rgba(77, 96, 163, 0.2)">Color_Ash Blue
                        <br/>정 철 한</Text1>
                    </Button>
                </Container1>
                <Container2>
                    <Img src={sohyun}></Img>
                    <Button>
                        <Text Color="#FFE690">Color_Yellow
                        <br/>오 하 솜</Text>
                        <Text1 Color="#FFE690">Color_Yellow
                        <br/>오 하 솜</Text1>
                    </Button> 
                    <Img src={cheolhan} ></Img>      
                </Container2>
            </Div>
        </>
    )
}

export default Picture;