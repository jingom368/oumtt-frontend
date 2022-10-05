import React from 'react'
import '../assets/css/program/2_7_chair.scss'
import chevron_Right from "../assets/svg/chevron_Right.svg"

function Chairs() {
    return (
        <>
            <div className="row_flex_1">
                <div className="chair_title_1">The Table</div>
                <div className="chair_text">이것은 책상이라고 부른다.
                    <br/>앉아서 밥을 먹고 공부를 하고 사무를 보는 것이라 한다.
                    <br/>
                    <br/>그러나, 우리는 이것을 책상이라고 부르지 않는다.
                </div>
            </div>
            <div className="row_flex_2">
                <div className="chair_title_2">The Chairs</div>
                <div className="chair_text">의자 위에 앉아있는 것은 무엇인가
                <br/>의자 위에 앉아있는 것은 사람이다.
                <br/>의자 위에 앉아있는 것은 사람이 아니다.
                <br/>    
                <br/>의자 위에 앉아있는 것은 무엇인가?
                </div>
            </div>
            <div className="chair_link">
                <a className="chair_notion" href="https://jazzy-second-e86.notion.site/6-11-Monthly-Art-SeoulForestival-with-You-842c0082a819449c82b2a00f57d22465"><div className="chair_link_text">More About Art Forestival<img className="chair_link_arrow" src={chevron_Right} alt="" /></div></a>
            </div>
        </>
    );
}
    
export default Chairs