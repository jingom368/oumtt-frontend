import React from 'react';
import styled from 'styled-components'
import polygon from "../../assets/svg/polygon.svg"

    const Select = styled.select`
        width: 328px;
        height: 40px;
        border: 1px solid #9E9E9E;
        border-radius: 8px;
        padding: 0px 14px;
        -webkit-appearance:none; /* for chrome */
        -moz-appearance:none; /*for firefox*/ 
        appearance:none;
        background: url(${polygon}) no-repeat 95% 50%/14px 12px;
        font-size: 14px;
        line-height: 20px;
        color: #DBFD5C;
        background-color: transparent;
        margin-top: 12px;

        option {
            padding: 5px 15px 5px;
            background-color: #000000;
        }
    `;  

function SelectTime(props) {

    // let exhibit = props.exhibit
    let day = props.day
    let time = props.time
    let time_choice = props.exhibit_time
    const select3 = []
    const option = []

    for(let i=0; i<time_choice.length; i++) {
        if (time_choice[i].day === day) {

            for(let j=1; j<Object.keys(time_choice[i]).length; j++) {
                option.push(<option>{time_choice[i][Object.keys(time_choice[i])[j]]}</option>)
            }

            select3.push(
                <Select key={day} required onChange={event=>{
                    props.onChangeNumber(event.target.value);
                    console.log(event.target.value);
                }}>
                    <option value="" hidden>{time}</option>
                        {/* <option value={time_choice[i].first}>{time_choice[i].first}</option>
                        <option value={time_choice[i].second}>{time_choice[i].second}</option>
                        <option value={time_choice[i].third}>{time_choice[i].third}</option>
                        <option value={time_choice[i].fourth}>{time_choice[i].fourth}</option>
                        <option value={time_choice[i].fifth}>{time_choice[i].fifth}</option> */}
                    {option}
                </Select>
            )
        }
    }

        // if (exhibit === '전시를 선택하세요' || day === '날짜를 선택하세요') {
        //     select3.push(
        //         <Select required>
        //             <option value="" defaultValue hidden>{props.time}</option>
        //         </Select>
        //     )
        // } else if (day === '9월 3일' || day === '9월 4일') {
        //     select3.push(
        //         <Select required onChange={event=>{
        //             props.onChangeNumber(event.target.value);
        //             console.log(event.target.value);
        //         }}>
        //             <option value="" hidden>{props.time}</option>
        //             <option value="15시">15시</option>
        //             <option value="17시">17시</option>
        //             <option value="19시">19시</option>
        //         </Select>
        //     )
        // } else if (day === '9월 17일' || day === '9월 18일') {
        //     select3.push(
        //         <Select required onChange={event=>{
        //             props.onChangeNumber(event.target.value);
        //             console.log(event.target.value);
        //         }}>
        //             <option value="" hidden>{props.time}</option>
        //             <option value="14시">14시</option>
        //             <option value="16시">16시</option>
        //             <option value="18시">18시</option>
        //             <option value="20시">20시</option>
        //         </Select>
        //     )
        // } else if (day === '9월 24일' || day === '9월 25일') {
        //     select3.push(
        //         <Select required onChange={event=>{
        //             props.onChangeNumber(event.target.value);
        //             console.log(event.target.value);
        //         }}>
        //             <option value="" hidden>{props.time}</option>
        //             <option value="14시">14시</option>
        //             <option value="15시 30분">15시 30분</option>
        //             <option value="17시">17시</option>
        //             <option value="18시 30분">18시 30분</option>
        //             <option value="20시">20시</option>
        //         </Select>
        //     )
        // }
    return <>{select3}</>
}
export default SelectTime;