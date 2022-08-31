import React from 'react'
import '../assets/css/1_header.scss'
import { useMediaQuery } from "react-responsive"

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
                <a className="oumtt_link" href=""><div className="nav_active">Main<div className="nav_point"></div></div></a>
                <a className="program_link" href="project/exhibit/program">Program</a>
                <a className="nav_home_notion" href=""><div>Oumtt</div></a>
            </div>
            <button className="nav_button" onClick={() =>{ScrollToTop()}}>관람 예약하기</button>
        </nav>
    </header>
}

export default Header;