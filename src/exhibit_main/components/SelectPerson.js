import React from 'react';
import styled from 'styled-components'
import polygon from "../../assets/svg/polygon_blue.svg"

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
        color: #8CB3EE;
        background-color: transparent;
        margin-top: 24px;

        option {
            padding: 5px 15px 5px;
            background-color: #000000;
        }
    `;

function SelectPerson(props) {

    // let exhibit = props.exhibit;
    let person = props.person
    const select2 = []
    
    select2.push(
        <Select key={person} required onChange={event=>{
            props.onChangeNumber(event.target.value);
            console.log(event.target.value);
        }}>
        <option value="" defaultValue hidden>{person}</option>
        <option value="1명">1명</option>
        <option value="2명">2명</option>
        </Select>
    )
    return <>{select2}</>
}
export default SelectPerson;