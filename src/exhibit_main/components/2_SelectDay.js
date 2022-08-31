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
        margin-top: 4px;

        option {
            padding: 5px 15px 5px;
            background-color: #000000;
        }
    `;

function SelectDay(props) {

    let exhibit = props.exhibit;
    let day = props.day
    let day_choice = props.exhibit_day
    const select2 = []
    let option = []

    for(let i=0; i<day_choice.length; i++) {
        if (day_choice[i].exhibit === exhibit) {

            for(let j=1; j<Object.keys(day_choice[i]).length; j++) {
                option.push(<option>{day_choice[i][Object.keys(day_choice[i])[j]]}</option>)
            }

            select2.push(
                <Select key={exhibit} required onChange={event=>{
                    props.onChangeNumber(event.target.value);
                    console.log(event.target.value);
                }}>
                    <option value="" hidden>{day}</option>
                    {option}
                </Select>
            )
        }
    }
    return <>{select2}</>
}
export default SelectDay;