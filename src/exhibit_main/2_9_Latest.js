import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'

    const Mtitle = styled.div`
        font-size: 40px;
        line-height: 52px;
        margin-top: 224px;
        margin-bottom: 48px;
        ${media.mobile`
            font-size: 14px;
            line-height: 14px;
            margin-top: 80px;
            margin-bottom: 24px;
        `}        
    `;

    const Iframe = styled.iframe`
        &:nth-child(7) {
            display: none;
        }
        ${media.mobile`
            &:nth-child(6) {
                display: none;
            }
            &:nth-child(7) {
                display: flex;
            }
        `}        
    `

    const Text = styled.div`
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        margin-top: 32px;
        margin-bottom: 160px;
        ${media.mobile`
            font-size: 10px;
            margin-top: 12px;
            line-height: 20px;
            margin-top: 12px;
            margin-bottom: 24px;
        `}        
    `;
    

function Latest() {

    return (
        <>
            <Mtitle>생 전시 Latest Project</Mtitle>
            <Iframe width="976" height="512" src="https://www.youtube.com/embed/8DUKvaDyd1Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            <Iframe width="328" height="184" src="https://www.youtube.com/embed/8DUKvaDyd1Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            <Text>영상 재생 버튼을 누르고, 소리와 함께 감상해주세요</Text>
        </>
    )
}

export default Latest;