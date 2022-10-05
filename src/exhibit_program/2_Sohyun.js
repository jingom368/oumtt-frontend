import React from 'react'
import '../assets/css/0_basic.scss'
import { SText, LRiv } from './components/GlobalStyle'
import { link } from './components/Link'

const Sohyun = () => {

   return (
        <> 
            <LRiv mjc="space-between">
                <SText mta="left" mlh="16px">외로움을<br/>버려야하거나 없어져야하는 감정이라고 생각하지 않는다.<br/>오히려 그 외로움을 아는 사람이따듯한 사람이라고 생각한다. <br/><br/>언제나 나를 따라다니고<br/>내가 데리고 다니는 이 '감정'을 파란색에 비췄다.<br/><br/>파란색 하면 바다가 먼저 떠오른다.<br/>바다를 생각하면 외롭고 고독하고 차가운 이미지도 있지만<br/>이 지구의 수많은 생명을 다같이 감싸주고 있어 가장 따듯한<br/>이미지를 가지고 있다고 볼 수 있을 것 같다.</SText>
                <LRiv mmt="100px">{link.Sohyunlink}</LRiv>
            </LRiv>
            <SText mta="right" mmt="56px" mmr="20px" mlh="16px">나의 외로움을 마주하다<br/>나의 외로움과 춤을 추다<br/>나의 외로움을 "데리고" 더 나아간다</SText>
        </>
    )
}

export default Sohyun
