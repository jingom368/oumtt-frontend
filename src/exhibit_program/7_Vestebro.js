import React from 'react'
import '../assets/css/0_basic.scss'
import Vestebro_c from '../assets/img/exhibit_program/7_Vestebro_c.png'
import Vestebro_l from '../assets/img/exhibit_program/7_Vestebro_l.png'
import Vestebro_p from '../assets/img/exhibit_program/7_Vestebro_p.png'
import { Mtitle, Text, SText, LRiv, Img, Line} from './components/GlobalStyle'
import { link } from './components/Link'

const Vestebro = () => {
    return (
        <>
            <Mtitle mta="right">Furniture</Mtitle>
            <Text mmt="4px" mta="right">Vestebro</Text>
            <LRiv mmt="16px">
                <Img src={Vestebro_c} mw="232px" mh="232px" mml="40px"></Img>
                <Img src={Vestebro_l} mw="20px" mh="25px" mml="20px" mmt="8px"></Img>
            </LRiv>
            <Text mmt="24px" mta="left">Objet Info.</Text>
            <LRiv mmt="32px" mjc="space-around">
                {link.Vestebro_f}
                {link.Vestebro_s}
                {link.Vestebro_t}
            </LRiv>
            <SText mmt="32px" mlh="16px">'온전한 휴식'에 대한 고민에서 출발한 디자인 소파입니다. 모든면을 곡선형으로<br/>뒷모습마저도 둥근 모습으로 표현한 쉘소파는<br/>1970년대 빈티지 디자인에서 오마쥬 된제품입니다.<br/><br/>자연 속 바닷가 조개 형상을 담은 쉘(shell)의 디자인은 자연의 평온함을<br/>담은 듯, 온전한 휴식을 선사합니다.</SText>
            <Line mmt="31.5px" mw="288px"></Line>
            <Text mta="center" mmt="32px">Brand Info.</Text>
            <SText mta="left" mmt="24px" mlh="16px">베스테브로는 일상에 영감을 주며,<br/>마음을 격려해주는 라이프스타일 오브제를 만드는 디자인 가구 회사입니다.<br/><br/>의미와 편안함을 찾아 기대와 꿈을 꾸게 해주며,<br/>우리 자신을 위한 공간이 있는 균형 잡힌 삶을 지향합니다.<br/><br/>고객이 진정으로 편안하게 느낄 수 있는 공간을 생각하며<br/>긴장을 풀고 삶의 휴식을 위한 가구를 디자인 하기위해 노력합니다.<br/><br/>또한, 소중함의 가치를 더 아름답고 덜 복잡하게 세상에 전달하고 싶습니다.</SText>
            <LRiv mmt="32px" mjc="space-between">
                <Img src={Vestebro_p} mw="96px" mh="136px"></Img>
                <SText mta="right" mmt="24px" mlh="16px">재료와 공정에서 생산및 배송에 이르기까지<br/>우리는 아름다운 미래를 형성하고<br/>책임감 있는 선택을 더 쉽게 할 수 있도록 최선을 다할것입니다.<br/><br/>"긍정적인 변화를 위한 계획 - 더 나은 내일을 위하여"<br/>Initiatives for Positive Change - For a Better Tomorrow</SText>
            </LRiv>
            <Text mmt="40px">Personal Colors</Text>
            <SText mmt="24px" mlh="16px">색에 대한 고민은 디자이너로써 끊임없는 탐색입니다.<br/>머리 속 상상으로 그려지 색감이 색이라는 특정 칼라로 실현되었을 때!<br/>남다른 희열을 느낍니다.<br/><br/>색이란 나를 표현한는 수단이자<br/>누군가의 삶을 담아내는 수단이자 창구이기도 하죠.<br/><br/>상상을 현실로 만드는 창의적 영감을 전달하는 컬러!  색에 대한 상상력을 무한합니다</SText>
            <LRiv mmt="24px" mjc="end">
                {link.Vestebrolink}
            </LRiv>
        </>
    )
}

export default Vestebro
