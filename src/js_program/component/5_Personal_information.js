import React from 'react'
import '../../assets/css/program/components/5_personal_information.scss'

function PersonalInformation() {
    function onButton() {
        let event_list_n = document.getElementsByClassName('event_list_choice')
        for(let i=1; i<=event_list_n.length; i++) { 
            if(document.getElementsByClassName('event_list_choice')[i-1].value === '') {
                break;
            }
        }
        if(document.querySelector('.event_name').value === '') {
        }
        else if(document.querySelector('.event_phonenumber').value === '') {
        }
        else if(document.querySelector('#check').checked !== true) {
            alert('개인정보활용동의를 체크해 주세요.');
        }
        else {
            alert('제출되었습니다');
        }
    }
    return (
        <>
            <div className="event_list_name">이름</div>
            <input type="name" className="event_name" name="event_name" autoComplete="off" maxLength="4" required />
            <div className="event_list_phonenumber">전화번호</div>
            <input type="phonenumber" className="event_phonenumber" name="event_phonenumber" autoComplete="off" maxLength="13" pattern="^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$" required />
            <div className="event_list_notice_2">입력하신 번호로 기프티콘이 발송되오니 정확히 입력해 주세요</div>
            <button name="event_list_button" className="event_list_button" onClick={() => onButton()}>정답 제출하기</button>
            <div className="event_list_agree">
                <div className="event_list_text">
                    기프티콘 수령을 위한 <a href="https://www.notion.so/bfa7747d14b1495f9923ac8dab8ea43d">개인정보활용</a>에 동의합니다.
                </div>
                <div className="event_list_check">
                    <input type="checkbox" id="check" name="event_answer[]" value="1" required />
                    <label className="label" htmlFor="check"></label>
                </div>
            </div>
        </>
    );
}
    
export default PersonalInformation;