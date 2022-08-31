import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/0_basic.scss'
import styled from 'styled-components'
// import SelectExhibit from './1_SelectExhibit';
import SelectDay from './SelectDay';
import SelectPerson from './SelectPerson'
import SelectTime from './SelectTime';
import checkbox_none from '../../assets/svg/checkbox_none_blue2.svg'
import checkbox_active from '../../assets/svg/checkbox_active_blue.svg'

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
        margin-top: 16px;
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
        border: none;
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
        margin-left: 84px;
    `

    const Click = styled.input.attrs({
        type: 'checkbox',
      })`
        width: 16px;
        height: 16px;
        margin: 4px 0px 0px 12px;
        background: url(${checkbox_none}) no-repeat center/16px 16px;
        appearance: none;

        &:checked {
            background: url(${checkbox_active}) no-repeat center/16px 16px;
        }
    `

function Content() {

    const [day, setDay] = useState('날짜를 선택해 주세요')
    const [person, setPerson] = useState('인원을 선택해 주세요')
    let person_number = {'1명':1, '2명':2}
    const [time, setTime] = useState('시간을 선택해 주세요')
    const exhibit_time = [
        {day: '날짜를 선택해 주세요'},
        {day: '9월 3일', first:'15시', second:'17시', third: '18시 30분', forth: '20시'},
        {day: '9월 4일', first:'14시', second:'16시', third: '18시', forth:'20시'},
    ]
    
    let [reservations, setReservations] = useState([])

    useEffect(() => {
        getReservations()
    }, [])

    let [ticket, setTicket] = useState([
        {day: '날짜를 선택해 주세요'},
        {day: '9월 3일', first:'0', second:'0', third: '0', forth:'0'},
        {day: '9월 4일', first:'0', second:'0', third: '0', forth:'0'},
    ])
    
        let getReservations = async () => {
        let response = await fetch (`/api/reservations/`)
        let data = await response.json()
        console.log('DATA: ', data)
        setReservations(data)
      
        let num = 0;
        for(let i=0; i<exhibit_time.length; i++) {
            if (ticket[i].day === exhibit_time[i].day) {

                for(let j=1; j<Object.keys(exhibit_time[i]).length; j++) {
    
                    for(let k=0; k<data.length; k++) {
                        if (data[k].Day === ticket[i]['day']) {
                            if (data[k].Time === exhibit_time[i][Object.keys(exhibit_time[i])[j]]) {
                                    if (data[k].Person === '2명') {
                                    num++;
                                }
                                num++;
                                ticket[i][Object.keys(exhibit_time[i])[j]] = num;
                            }
                        }
                    }
                    num = 0;
                }
            }
        }
        setTicket(ticket)
    }
    console.log('ticket: ', ticket)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [dance, setDance] = useState(false)
    const [personal, setPersonal] = useState(false)

    const body = {Day: day, Person: person, Time: time, Name: name, Phone: phone, Dance: dance, Personal: personal}
    
    let createReservation = async () => {
        fetch(`/api/reservations/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    }

    const ValidateModal = () => {
        return(
          <ValidateModal>
            이 시간은 모두 매진되었습니다.
            날짜와 시간을 변경하여 예약해주세요.
          </ValidateModal>
        )
    }

    const validation = () => {
        if (name === '') {
            alert('이름을 체크해 주세요.');
        } else if (phone === '') {
            alert('전화번호를 체크해 주세요.');
        } else if (personal === false) {
            alert('개인정보 동의를 체크해 주세요.');
        } else if (day === '날짜를 선택해 주세요') {
            alert('날짜를 선택해 주세요.')
        } else if (person === '인원을 선택해 주세요') {
            alert('인원을 선택해 주세요.')
        } else if (time === '시간을 선택해 주세요') {
            alert('시간을 선택해 주세요.')
        } else if (name !== '' && phone !== '' && personal !== false && day !== '날짜를 선택해 주세요' && person !== '인원을 선택해 주세요' && time !== '시간을 선택해 주세요') {
            for(let i=0; i<exhibit_time.length; i++) {
                if (exhibit_time[i].day === day) {
                    for(let j=1; j<Object.keys(exhibit_time[i]).length; j++) {
                        if (exhibit_time[i][Object.keys(exhibit_time[i])[j]] === time ) {
                            if (person_number[person] + Number(ticket[i][Object.keys(ticket[i])[j]]) > 8) {
                                alert('해당 시간은 예약이 초과되었습니다.\n다른 시간으로 예약 부탁 드립니다.')
                            }
                            else {
                                alert(day + ' ' + person + ' ' + time + ' 예약 되었습니다.')
                                createReservation()
                                ScrollToTop()
                            }
                            // console.log('ticketnumber: ', typeof(person_number[person]))
                            // console.log('ticketnumber2: ', typeof(ticket[i][Object.keys(ticket[i])[j]]))
                            // console.log('ticketnumber3: ', person_number[person] + Number(ticket[i][Object.keys(ticket[i])[j]]))
                        }
                    }
                }
            }
        }
    }
    
    const navigate = useNavigate();
    const goUrl = () => {
        navigate('/project/exhibit/main/');
        setName('')
        setPhone('')
        setDay('날짜를 선택해 주세요')
        setPerson('인원을 선택해 주세요')
        setTime('시간을 선택해 주세요')
        setDance(false)
        setPersonal(false)
    };

    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    let handleSubmit = () => {
        validation()
        goUrl()
    }

    return (
        <SelcetContent>
            <Text>이름/신청 닉네임</Text>
            <Input id="standard-basic" label="이름" variant="standard" value={name} onChange={(e) => {
                setName(e.target.value)
                console.log(name)
            }}/>
            <Text2>*가입하신 아이디가 아닌, 텀블벅 닉네임을 함께 기재해주세요</Text2>
            <Text1>전화번호</Text1>
            <Input id="standard-basic" label="전화번호" variant="standard" value={phone} onChange={(e) => {
                setPhone(e.target.value)
            }}/>
            <Text2>입력하신 번호로 공연안내가 전송되오니 정확히 입력해 주세요</Text2>
            <SelectDay day={day} onChangeNumber = {(number1) => {
                setDay(number1)
                setPerson('인원을 선택해 주세요')
                setTime('시간을 선택해 주세요')
            }}></SelectDay>
            <SelectPerson person={person} onChangeNumber = {(number2) => {
                setPerson(number2)
                setTime('시간을 선택해 주세요')
            }}></SelectPerson>
            <Text3>*시간 선택은 선착 마감될 수 있습니다.</Text3>
            <SelectTime day={day} time={time} exhibit_time={exhibit_time} ticket={ticket} onChangeNumber = {(number3) => {
                setTime(number3)
            }}></SelectTime>
            <Button onClick={handleSubmit}>예약 신청하기
            </Button>
            <LRiv>
                <Text4>무용전공여부</Text4>
                <Click checked={dance} onClick={(e) => {
                    setDance(e.target.checked)
                    console.log(e.target.checked)
                }} readOnly></Click>
                <Text5>개인정보활용동의</Text5>
                <Click checked={personal} onClick={(e) => {
                    setPersonal(e.target.checked)
                }} readOnly></Click>
            </LRiv>
        </SelcetContent>
    )
}

export default Content