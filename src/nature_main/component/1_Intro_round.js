import React from 'react'
import '../../assets/css/main/components/1_intro_round.scss'

function IntroRound(props) {
    return ( 
        <div className="intro_round_box">
            <div className="intro_round"></div>
            <div className="intro_line_text">{props.timetable}</div>
        </div>
    );
}
    
export default IntroRound;