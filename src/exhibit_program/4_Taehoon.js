import React from 'react'
import styled from 'styled-components'
import '../assets/css/0_basic.scss'
import media from '../media'

const Text = styled.div`
    ${media.mobile`
        font-size: 8px;
        line-height: 16px;
        color: ${(props)=>props.mcolor};
        text-align: ${(props)=>props.mta};
        margin-top: ${(props)=>props.mmt};
        margin-right: ${(props)=>props.mmr};
        font-size: ${(props)=>props.mfs};
        line-height: ${(props)=>props.mlh};
    `}
`

const Taehoon = () => {
    return (
        <>
            <Text mcolor="#DEECEF" mta="left" mmt="136px">외로움이란 무엇일까.
            <br/>이번 프로젝트를 통해
            <br/>처음으로 깊게 생각해 보았습니다.</Text>
            <Text mcolor="#DEECEF" mta="right" mmt="16px">난 언제 외로움을 느낄까
            <br/>그런 감정은 어디서 오는 걸까
            <br/>그러다, 외로움이란 비단 혼자일 때만 찾아오는 게 아니라는 걸 깨달았습니다.
            <br/>어쩌면 외로움이 필요한 때도 있지 않을까.
            <br/>아직 외로움을 다 알진 못했지만, 그걸 느낀 제 감정을 표현해 봤습니다.</Text>
            <Text mcolor="#B5CEEE" mta="center" mmt="24px" mlh="8px">끝이 없는 파도 같은.</Text>
            <Text mcolor="#FFFFFF" mta="right" mmt="35px" mfs="6px" mlh="10px">More About TaeHoon</Text>
        </>
    )
}

export default Taehoon
