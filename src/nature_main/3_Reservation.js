import React from 'react'
import '../assets/css/main/2_3_Reservation.scss'

function Contact() {

    return (
        <>
            <div id="contact" className="contact">
                <div className="contact-box">
                    <div className="contact-index">
                        <div id="contact-title" className="contact-title">Join with<div className="contact_point"></div>
                            <br />SeoulForestival
                        </div>
                        <div className="contact-info">
                            <div className="contact-info_time">2022.06.11 4pm. Seoul Forest</div>
                            <div className="contact-info_place">서울숲 서울특별시 성동구 뚝섬로 273</div>
                            <div className="contact-info_notice">*사전 매칭 작업 인원제한으로 인하여
                                <br />관람 장소 및 상세 일정은 추후 공지해드릴 예정입니다.</div>
                        </div>
                    </div>
                    <div className="contact-submit">
                        <form action="/" method="post" name="contact" >
                            <div className="contact-submit_info-personal">
                                <div className="contact-submit_info-name">
                                    이름
                                </div>
                                <input type="name" id="input_box_1" name="name" autoComplete="off" maxLength="4" required />
                                <div className="contact-submit_info-phonenumber">
                                    전화번호
                                </div>
                                <input type="phonenumber" id="input_box_2" name="phonenumber_1" autoComplete="off" maxLength="13" pattern="^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$" required />
                            </div>
                            <div className="contact-submit_info-notice">
                                입력하신 번호로 공연안내가 전송되오니 정확히 입력해 주세요
                            </div>
                            <div className="contact-submit_how-think">
                                자연에서 산책할 때, 어떤 생각을 하시나요?
                            </div>
                            <div>
                                <select id="how_think" name="how_think" className="contact-submit_select-think" required>
                                    <option className="contact-submit_select-box" value="" hidden>당신의 생각을 선택해 주세요.</option>
                                    <option className="contact-submit_select-box" value="푸릇푸릇한 자연을 좋아해서.">푸릇푸릇한 자연을 좋아해서.</option>
                                    <option className="contact-submit_select-box" value="아무런 이유없이도 산책을 즐겨해요.">아무런 이유없이도 산책을 즐겨해요.</option>
                                    <option className="contact-submit_select-box" value="생각(고민)의 정리가 필요할 때.">생각(고민)의 정리가 필요할 때.</option>
                                    <option className="contact-submit_select-box" value="스트레스를 해소하기 위해서.">스트레스를 해소하기 위해서.</option>
                                </select>
                            </div>
                            <button name="contact-submit-button" className="contact-submit-button" disabled>관람 신청하기</button>
                            <div className="contact-submit_check">
                                <div className="contact-submit_check-dance">
                                    무용전공여부
                                </div>
                                <div className="contact-submit_check-box">
                                    <input type="checkbox" id="agree_1" name="answer_1[]" value="1" />
                                    <label htmlFor="agree_1"></label>
                                </div>
                                <div className="contact-submit_check-agree">
                                    <a href="https://www.notion.so/bfa7747d14b1495f9923ac8dab8ea43d">개인정보활용동의</a>
                                </div>
                                <div className="contact-submit_check-box">
                                    <input type="checkbox" id="agree_2" name="answer_2[]" value="2" required />
                                    <label htmlFor="agree_2"></label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;