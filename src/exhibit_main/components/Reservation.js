import React, { useState } from 'react'
import '../../assets/css/0_basic.scss'
import styled from 'styled-components'
import SelectExhibit from './1_SelectExhibit';
import SelectDay from './2_SelectDay';
import SelectTime from './3_SelectTime';
import styledEngine from '@mui/styled-engine';
import checkbox_none from '../../assets/svg/checkbox_none_blue.svg'

    const SelcetContent = styled.div`
        display: flex;
        flex-direction: column;
        * {
            color: #8CB3EE;
        }
    `

    const Text = styled.div`
        font-size: 14px;
        line-height: 24px;
    `

    const Text1 = styled(Text)`
        margin-top: 40px;
    `

    const Text2 = styled(Text)`
        font-size: 12px;
        line-height: 20px;
        margin-top: 4px;
    `

    const Text3 = styled(Text)`
        font-size: 10px;
        line-height: 10px;
        color: rgba(252, 0, 0, 0.5);
        margin-top: 10px;
        font-weight: 700;
    `

    const Input = styled.input`
        width: 328px;
        height: 36px;
        margin-top: 4px;
        border-right:0px; 
        border-top:0px; 
        border-left:0px; 
        border-bottom: 0.5px solid #000000;
        outline: none;
        background-color: transparent;
    `

    const Button = styled.button`
        width: 220px;
        height: 48px;
        background: #8CB3EE;
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.12), 2px 2px 16px rgba(196, 196, 196, 0.15);
        backdrop-filter: blur(4px);
        border-radius: 12px;
        margin-top 16px;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        outline: auto;
        align-self: center;
    `;

    const LRiv = styled.div`
        display: flex;
        flex-direction: row;
        margin-top:16px;
    `

    const Text4 = styled(Text)`
    `

    const Text5 = styled(Text)`
        margin-left: 87px;
    `

    const Click = styled.input.attrs({
        type: 'checkbox',
      })`
        width: 16px;
        height: 16px;
        margin: 4px 0px 0px 12px;
        background: url(${checkbox_none}) no-repeat center/16px 16px;
        outline: auto;
        appearance: none;
    `

function Content({ history }) {

    const [exhibit, setExhibit] = useState('전시를 선택하세요')
    const [day, setDay] = useState('날짜를 선택하세요')
    const exhibit_day = [
        {exhibit: '전시를 선택하세요'},
        {exhibit: '전시1', first:'9월 3일', second:'9월 4일'},
        {exhibit: '전시2', first:'9월 17일', second:'9월 18일'},
        {exhibit: '전시3', first:'9월 24일', second:'9월 25일'},
    ]
    const [time, setTime] = useState('시간을 선택하세요')
    const exhibit_time = [
        {day: '날짜를 선택하세요'},
        {day: '9월 3일', first:'13시', second:'15시', third: '17시'},
        {day: '9월 4일', first:'13시', second:'15시', third: '17시'},
        {day: '9월 17일', first:'12시', second:'14시', third: '16시', fourth:'18시'},
        {day: '9월 18일', first:'12시', second:'14시', third: '16시', fourth:'18시'},
        {day: '9월 25일', first:'12시', second:'13시 30분', third: '15시', fourth:'16시 30분', fifth: '18시'},
        {day: '9월 24일', first:'12시', second:'13시 30분', third: '15시', fourth:'16시 30분', fifth: '18시'},
    ]

    const body = {Exhibit : exhibit, Day : day, Time : time}
    
    let createReservation = async () => {
        fetch(`/api/reservations/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    }

    let handleSubmit = () => {
        createReservation()
        // history.push('/')
    }

    return (
        <SelcetContent>
            <Text>이름</Text>
            <Input id="standard-basic" label="이름" variant="standard" />
            <Text1>전화번호</Text1>
            <Input id="standard-basic" label="전화번호" variant="standard" />
            <Text2>입력하신 번호로 공연안내가 전송되오니 정확히 입력해 주세요</Text2>
            <SelectExhibit exhibit={exhibit} onChangeNumber = {(number1) => {
                setExhibit(number1)
                setDay('날짜를 선택하세요')
                setTime('시간을 선택하세요')
            }}></SelectExhibit>
            <Text3>*시간 선택은 선착 마감될 수 있습니다.</Text3>
            <SelectDay exhibit={exhibit} day={day} exhibit_day={exhibit_day} onChangeNumber = {(number2) => {
                setDay(number2)
                setTime('시간을 선택하세요')
            }}></SelectDay>
            <SelectTime exhibit={exhibit} day={day} time={time} exhibit_time={exhibit_time} onChangeNumber = {(number3) => {setTime(number3)}}></SelectTime>
            <Button name="Hello" onClick={handleSubmit}>예약 신청하기</Button>
            <LRiv>
                <Text4>무용전공여부</Text4>
                <Click></Click>
                <Text5>개인정보활용동의</Text5>
                <Click></Click>
            </LRiv>
        </SelcetContent>
    )
}

export default Content