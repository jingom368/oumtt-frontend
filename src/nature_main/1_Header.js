import React, { useEffect } from 'react'
import '../assets/css/1_header.scss'
import { useMediaQuery } from "react-responsive"

function Header() {
    const isMobile = useMediaQuery({
        query : "(max-width:1023px)"
    });
    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
    });

    useEffect(() => {
        window.addEventListener('scroll', () => { 
            let height = window.scrollY;
            const color_a = "transparent";
            const color_b = "#000000";
            if (isMobile) {
                if (height < 480) { 
                    document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
                } else {
                    document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
                }
            } 
            if (isPc) {
                if (height < 1200) {
                    document.getElementsByTagName("header")[0].style.backgroundColor = color_a;
                } else {
                    document.getElementsByTagName("header")[0].style.backgroundColor = color_b;
                }
            }
        });
    })

    return <header>
        <nav>
            <div className="nav_home">
                <a className="oumtt_link" href="/">Main</a>
                <a className="program_link" href="/program"><div className="nav_active">Program<div className="nav_point"></div></div></a>
                <a className="nav_home_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1"><div>Oumtt</div></a>
            </div>
            <a href="https://open.kakao.com/o/gXx0f5je"><button className="nav_button">관객참여 Talk 가기</button></a>
        </nav>
    </header>
}

export default Header;