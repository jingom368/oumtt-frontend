import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'

    const Text = styled.div`
        ${media.mobile`
            font-weight: 600;
            font-size: 12px;
            line-height: 12px;
            letter-spacing: 0.1em;
            color: #B5CEEE;
            margin-top: 180px;
            margin-left: 108px;
        `}
    `;

    const Mtitle = styled.div`
        ${media.mobile`
            font-family: 'Maitree' !important;
            font-weight: 600;   
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #B5CEEE;
            text-align: center;
            margin-top: 184px;
        `}
    `

const Introduction = () => {
    return (
        <>
            <Text>배 소 현 전시</Text> 
            <Mtitle>|Personal Colors_Blue</Mtitle>
        </>
    )
}

export default Introduction
