import React from 'react'
import '../assets/css/program/2_10_contact.scss'
import notion from "../assets/img/Notion.png"
import instagram from "../assets/img/Instagram.png"
import youtube from "../assets/img/YouTube.png"

function Contact() {
    return ( 
        <div className="contact_info-grid">
            <div className="contact_info-box">
                <div className="contact_info-contact">
                    Follow Us
                </div>
                <div className="contact_info-link">
                    <a className="contact_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1">
                    <img className="contact_info-link_image" src={notion} alt="" />
                    <div className="contact_info-link_text">Notion</div>
                    </a>
                    <a className="contact_instagram" href="https://www.instagram.com/project_oumtt/">
                    <img className="contact_info-link_image" src={instagram} alt="" />
                    <div className="contact_info-link_text">Instagram</div>
                    </a>
                    <a className="contact_youtube" href="https://www.youtube.com/channel/UCjaqvJXS6w5W7EtdPT-w4aQ">
                    <img className="contact_info-link_image" src={youtube} alt="" />
                    <div className="contact_info-link_text">Youtube</div>
                    </a>
                </div>
            </div>
            <div className="contact_info-box">
                <div className="contact_info-contact">
                    Contact Us
                </div>
                <form action="/program" method="post" className="contact_info-click">
                    <input type="contact" className="contact_input_box" name="contact" autoComplete="off" placeholder="이름 / 연락처 또는 메일" />
                    <div className="contact_input_notice_1">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
                    <button name="contact-submit-button2" className="contact-submit-button">연락하기</button>
                </form>
                <div className="contact_input_notice_2">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
            </div>
        </div>
    );
}
    
export default Contact;