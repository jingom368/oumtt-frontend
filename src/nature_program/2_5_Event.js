import React from 'react'
import '../assets/css/program/2_5_event.scss'
import EventList from './component/4_Event_list'
import PersonalInformation from './component/5_Personal_information'

function Event() {
    const team = ['Team 1.', 'Team 2.', 'Team 3.', 'Team 4.', 'Team 5.']
    const eventlist = []
    for(let i=0; i<team.length; i++) {
        eventlist.push(<EventList key={team[i]} team={team[i]}></EventList>)
    }

    return ( 
        <>
            <div className="event_title">Quiz Event</div>
            <div className="event_text">Part1 무용수의 움직임을 관람하신 후,
            <br/>작품명과 내용을 맞추어 제출해주세요.</div>
            <div className="event_notice">*추첨을 통해, 정답을 맞추신 분들께 기프티콘을 보내드려요.</div>
            <form action="/program" method="post" name="event_action">
                <div className="event_select"> 
                    {eventlist}
                </div>
                <PersonalInformation></PersonalInformation>
            </form>
        </>
    );
}
    
export default Event;