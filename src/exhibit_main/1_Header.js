import React from 'react'
import '../assets/css/1_header.scss'
import { useMediaQuery } from "react-responsive"
import { NavLink } from 'react-router-dom'

function Header() {
    // const isMobile = useMediaQuery({
    //     query : "(max-width:1023px)"
    // });
    // const isPc = useMediaQuery({
    //     query : "(min-width:1024px)"
    // });

    // useEffect(() => {
    //     window.addEventListener('scroll', () => { 
    //         let height = window.scrollY;
    //         const color_a = "transparent";
    //         const color_b = "#000000";
    //         if (isMobile) {
    //             if (height < 480) { 
    //                 document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
    //             } else {
    //                 document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
    //             }
    //         } 
    //         if (isPc) {
    //             if (height < 1200) {
    //                 document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
    //             } else {
    //                 document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
    //             }
    //         }
    //     });
    // })

    const isMobile = useMediaQuery({
        query : "(max-width:1023px)"
    });
    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
    });

    const ScrollToTop = () => {
        if (isMobile) {
            window.scrollTo(0, 1226);
        }
        if (isPc) {
            window.scrollTo(0, 3425);
        }
    }

    return <header>
        <nav>
            <div className="nav_home">
                <NavLink to="/project/exhibit/main/" className={({isActive}) => (isActive? "nav_active" : "")}>Main</NavLink>
                <NavLink to="/project/exhibit/program/" className={({isActive}) => (isActive? "nav_active" : "")}>Program</NavLink>
                <a className="nav_home_notion" href="https://oumtt.com/"><div>Oumtt</div></a>
            </div>
            <NavLink to="/project/exhibit/main/"><button className="nav_button" onClick={() =>{ScrollToTop()}}>?????? ????????????</button></NavLink>
        </nav>
    </header>
}

export default Header;