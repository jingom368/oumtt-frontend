import React from 'react'
import styled from 'styled-components';
import media from './media'

const Img = styled.img`
    display: flex;
    display: ${(props)=>props.display};
    max-width: 1024px;
    min-width: 1200px;
    width: 100%;
    height: 100%; 
    object-fit: cover;
    ${media.mobile`
        min-width: 360px;
        max-width: 414px;
    `}
`;

const Tag = (props) => {
    let TagName = props.tag;
    return (
        <div className='item'>
        <Img display={props.display} src={props.img} alt="" />
        <div className='item_box'><TagName></TagName></div>
        </div>
    )
}

export default Tag;

