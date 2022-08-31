import './assets/css/header.scss'
import styled from 'styled-components'
import media from './media'
import React from 'react'

function Header() {
      
      const Header = styled.header`
        display: flex;
        position: fixed;
        justify-content: center;
        width: 100%;
        z-index: 10;
        height: 64px;
        ${media.mobile`height: 48px;`};
      `; 

    return <Header>
        <nav>
            <div className="nav_home">
                <a className="" href="/">Main</a>
                <a className="" href="/"><div className="nav_active">Program<div className="nav_point"></div></div></a>
                <a className="" href="/">Oumtt</a>
            </div>
        </nav>
    </Header>
}

export default Header;









// import React, { useEffect } from 'react'
// import { useMediaQuery } from "react-responsive"


//     const isMobile = useMediaQuery({
//         query : "(max-width:1023px)"
//     });
//     const isPc = useMediaQuery({
//         query : "(min-width:1024px)"
//     });

//     useEffect(() => {
//         window.addEventListener('scroll', () => { 
//             let height = window.scrollY;
//             const color_a = "transparent";
//             const color_b = "#000000";
//             if (isMobile) {
//                 if (height < 480) { 
//                     document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
//                 } else {
//                     document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
//                 }
//             } 
//             if (isPc) {
//                 if (height < 1200) {
//                     document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
//                 } else {
//                     document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
//                 }
//             }
//         });
//     })