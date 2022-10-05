import React from 'react'
// import { useState, useEffect } from 'react'
import './assets/css/human_program/2_10_contact.scss'
import notion from "./assets/svg/Notion.svg"
import instagram from "./assets/svg/Instagram.svg"
import youtube from "./assets/svg/YouTube.svg"
import styled from 'styled-components'
import media from './media'
import oumtt_l from './assets/img/oumtt_l.png'

const Img = styled.img` 
    ${media.mobile`
        width: 184px;
        height: 63px;
        align-self: end;
        margin-bottom: 5px;
    `}      
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    color: #7C95C3;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 140px;
    ${media.mobile`
        row-gap: 64px;
    `}      
`

const Div2 = styled.div`
    font-weight: 600;
    line-height: 26px;
    font-size: 18px;
    ${media.mobile`
        font-size: 16px;
    `}
`

function Contact() {

    // let [contacts, setContacts] = useState([])

    // useEffect(() => {
    //     getContacts()
    // }, [])

    //     let getContacts = async () => {
    //     let response = await fetch (`/api/contacts/`)
    //     let data = await response.json()
    //     console.log('DATA: ', data)
    //     setContacts(data)
    //     }

    // const [contact, setContact] = useState('')

    // const body = {Contact: contact}

    // let createContact = async () => {
    //     fetch(`/api/contacts/`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body),
    //     })
    // }

    // const ScrollToTop = () => {
    //     window.scrollTo(0, 0);
    // }

    // const validation = () => {
    //     if (contact === '') {
    //         alert('연락처를 체크해 주세요.');
    //     } else {
    //         createContact()
    //         ScrollToTop()
    //         setContact('')
    //         alert('움트에 연락해주셔서 감사합니다.')
    //     }
    // }
    
    return ( 
        <>
            <Img src={oumtt_l}></Img>
            <Div>
                <div>
                    <Div2>
                        Follow Us
                    </Div2>
                    <div className="contact_info-link">
                        <a className="contact_notion" href="https://oumtt.com/">
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
                <div>
                    <Div2>
                        Contact Us
                    </Div2>
                    <div className="contact_info-click">
                        <input type="contact" className="contact_input_box" name="contact" autoComplete="off" placeholder="움트와 함께 하고 싶으시다면, 연락처를 남겨 주세요!" />
                        <button name="contact-submit-button2" className="contact-submit-button">연락하기</button>
                    </div>
                    <footer>
                        <div className="footer_info-line_program">
                            <div className="footer_info-copyright">
                                Copyrightⓒ 2022. Oumtt. All right reserved.
                            </div>
                        </div>
                    </footer>
                </div>
            </Div>
        </>
    );
}
    
export default Contact;