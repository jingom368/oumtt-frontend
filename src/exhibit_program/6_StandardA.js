import React from 'react'
import '../assets/css/0_basic.scss'
import StandardA_p from '../assets/img/exhibit_program/6_StandardA_p.png'
import { Btitle, Mtitle, Text, SText, LRiv, Img, Line } from './components/GlobalStyle'
import { link } from './components/Link'

const StandardA = () => {

    // const links = [
    //     {href:"https://jazzy-second-e86.notion.site/8b16fd2cace240b6866d4ffec86a51db", mml:"65px", text:"자만보다는 낭만"},
    //     {href:"https://jazzy-second-e86.notion.site/4abfbb004be34437b495e81e7c01cbf5", mml:"64px", text:"나에게만 보이는 보물들"},
    //     {href:"https://www.instagram.com/paran__bada/", mta:"right", text:"More About 유목이야기"},
    // ]
    // let linkList = links.filter((link,idx) => idx <= 1).map((link,idx) => {
    //     return <Link key={idx} href={link.href} mml={link.mml} mta={link.mta} mcolor={link.mcolor}>{link.text}</Link>
    // })
    // let linkname = links.filter((link,idx) => idx === 2).map((link,idx) => {
    //     return <Link key={idx} href={link.href} mml={link.mml} mta={link.mta} mcolor={link.mcolor}>{link.text}</Link>
    // })

    return (
        <>
            <Btitle>Collaboration Brand</Btitle>
            <Mtitle mta="right" mmt="16px">Furniture</Mtitle>
            <Text mmt="8px" mta="right">Standard. a</Text>
            <Img mw="328px" mh="144px" mmt="16px" src={StandardA_p}></Img>
            <Text mmt="16px" mta="left">Object Info.</Text>
            <LRiv mmt="24px" mjc="space-around">
                {link.StandardA_f}
                {link.StandardA_s}
                {link.StandardA_t}
            </LRiv>
            <Line mw="288px" mmt="31.5px"></Line>
            <Text mmt="32px">Brand Info.</Text>
            <SText mmt="16px">정직한 첫 번째 제안</SText>
            <SText mmt="24px" mlh="16px">제작자의 노력과 고민은 제품의 수명으로 고스란히 이어집니다.<br/>소재와 기능에 대한 경험과 주의 깊은 선택을 통해 만족할 만한 품질을 이끌어내는 일.<br/>우리의 단순한 원칙입니다. 이를 바탕 삼아 건네는 정직한 제안, 스탠다드에이입니다.</SText>
            <Text mmt="48px">Personal Colors</Text>
            <SText mmt="16px" mlh="16px">사람을 색으로 표현하는것은 참 어렵다고 생각합니다.<br/>스쳐지나가는 사람이라면 스쳐지나가는 찰나의 느낌을 색으로 말 할 수 있을테지만<br/>매일보는 색이라면 매일의 색이 다를테니까요<br/>하물며 나의색은 무엇인가라는 질문은 너무 어렵네요.<br/>혈액형이나 MBTI처럼 쉽고 간단하게 판단 할 수 있는 질문들이 있다면 좋겠습니다<br/><br/>- 한동안 화장품회사에서 컬러들을 고를때 제주돌담색,<br/>딸기우유색처럼 사물의 색이나 느낌을 빌려와 색을 말하곤 했으니<br/>굳이 저도 답변을 쓰는 지금 나의 색을 대답한다면<br/>'단답형대답불가'색으로 답 할 수 있겠네요.</SText>
            <Line mw="288px" mmt="31.5px"></Line>
            <LRiv mjc="end" mmt="24px">
                {link.StandardAlink}
            </LRiv>
        </>
    )
}

export default StandardA
