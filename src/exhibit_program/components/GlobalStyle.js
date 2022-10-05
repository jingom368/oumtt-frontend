import styled from "styled-components";
import media from '../../media'

export const Btitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        color: inherit;
        text-align: ${(props)=>props.mta};
        color: ${(props)=>props.mcolor};
    `}
`

export const Mtitle = styled.div`
    ${media.mobile`
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: inherit;
        text-align: ${(props)=>props.mta};
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        margin-right: ${(props)=>props.mmr};
        color: ${(props)=>props.mcolor};
    `}
`

export const Text = styled.div`
    ${media.mobile`
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        text-align: center;
        line-height: 8px;
        color: inherit;
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
        margin-right: ${(props)=>props.mmr};
        text-align: ${(props)=>props.mta};
        line-height: ${(props)=>props.mlh};
        color: ${(props)=>props.mcolor};
    `}
`

export const SText = styled(Text)`
    ${media.mobile`
        text-align: center;
        font-weight: 400;
        text-align: ${(props)=>props.mta};
    `}
`

export const LRiv = styled.div`
    ${media.mobile`
        display: flex;
        flex-direction: row;
        justify-content: ${(props)=>props.mjc};
        margin-top: ${(props)=>props.mmt};
    `}
`

export const Img = styled.img`
    ${media.mobile`
        width: ${(props)=>props.mw};
        height: ${(props)=>props.mh};
        margin-top: ${(props)=>props.mmt};
        margin-left: ${(props)=>props.mml};
    `}
`

export const Svg = styled.img`
    ${media.mobile`
        width: 4px;
        height: 8px;
        margin-left: 4px;
    `}
`

export const Line = styled.div`
    ${media.mobile`
        width: 328px;
        align-self: center;
        border-top: 0.5px solid ${(props)=>props.mcolor};
        margin-left: ${(props)=>props.mml};
        margin-top: ${(props)=>props.mmt}; 
        align-self: ${(props)=>props.mas};
        width: ${(props)=>props.mw};
    `}
`

export const A = styled.a`
    ${media.mobile`
        display: inline-flex;
        margin-left: ${(props)=>props.mml};
    `}
`