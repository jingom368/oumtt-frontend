import React from 'react'
import '../assets/css/main/2_4_Schedule.scss'
import styled from 'styled-components'
import Schedule1 from '../assets/img/nature_main/schedule_photo_1.png'
import Schedule2 from '../assets/img/nature_main/schedule_photo_2.png'
import Chevoron from '../assets/img/nature_main/chevron_Right.png'

const A = styled.a`
    text-decoration: none;
`

const Img = styled.img`
    margin-left: 4px;
`

const Schedule = () => {
    return (
        <>
            <div className="schedule">
                <div className="schedule_box">
                    <div className="schedule_program_1">
                    </div>
                    <div>
                        <img className="schedule_photo_1" src={Schedule1} alt=""/>
                            <img className="schedule_photo_2" src={Schedule2} alt=""/>
                            </div>
                            <div className="schedule_content">
                                <div className="schedule_program_2">
                                </div>
                                <div className="schedule_category">
                                    <div className="schedule_number">01<span className="schedule_title">Intro</span></div>
                                    <div className="schedule_number">02<span className="schedule_title">Celebratory Performance</span></div>
                                    <div className="schedule_number">03<span className="schedule_title">With You</span></div>
                                    <div className="schedule_number">04<span className="schedule_title">The Table</span></div>
                                    <div className="schedule_number">05<span className="schedule_title">The Chairs</span></div>
                                </div>
                                <div className="schedule_about">
                                    <A className="program_link" href="/program">작품소개 및 출연진 보기<Img src={Chevoron} alt=""/></A>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Schedule
