import React from 'react'
import '../assets/css/program/2_10_contact.scss'
import notion from "../assets/svg/Notion.svg"
import instagram from "../assets/svg/Instagram.svg"
import youtube from "../assets/svg/YouTube.svg"
import styled from 'styled-components'
import media from '../media'

const Div = styled.div`
    margin-top: 72px;
    margin-bottom: 138px;
    ${media.mobile`
        margin-top: 32px;
        margin-bottom: 81px;
    `}      
`

function Contact() {
    return ( 
        <>
            <Div className="contact_info-grid">
                <div className="contact_info-box">
                    <div className="contact_info-contact">
                        Follow Us
                    </div>
                    <div className="contact_info-link">
                        <a className="contact_notion" href="">
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
                        <input type="contact" className="contact_input_box" name="contact" autoComplete="off" placeholder="움트와 함께 하고 싶으시다면, 연락처를 남겨 주세요!" />
                        <box name="contact-submit-button2" className="contact-submit-button">연락하기</box>
                    </form>
                </div>
            </Div>
        </>
    );
}
    
export default Contact;