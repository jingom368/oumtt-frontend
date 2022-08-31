import React from 'react'
import '../../assets/css/program/components/4_event_list.scss'

function EventList(props) {

    return (
        <>
            <div className="event_list_number">{props.team}</div>
            <select className="event_list_choice" name="select_1" required>
                <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                <option className="event_list_choice_1" value="바람">바람</option>
                <option className="event_list_choice_1" value="보라연기">보라연기</option>
                <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
            </select>
        </>
    );
}
    
export default EventList;