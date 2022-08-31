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
        margin-top: 48px;

        option {
            padding: 5px 15px 5px;
            background-color: #000000;
        }
    `;

function SelectExhibit(props) {

    let exhibit = props.exhibit
    const select1 = []

    select1.push(
        <Select key={exhibit} required onChange={event=>{
            props.onChangeNumber(event.target.value);
            console.log(event.target.value);
        }}>
        <option value="" defaultValue hidden>{exhibit}</option>
        <option value="전시1">전시1</option>
        <option value="전시2">전시2</option>
        <option value="전시3">전시3</option>
        </Select>
    )
    return (
        <>{select1}</>
    )
}

export default SelectExhibit;