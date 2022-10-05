import React from 'react'
import '../assets/css/main/2_5_Artist.scss'
import styled from 'styled-components'

const A = styled.a`
    text-decoration: none;
`

const Img = styled.img`
    margin-left: 4px;
`

const Artist = () => {
    return (
        <>
            <div id="artist" className="artist">
                <div className="artist_title">
                    BIAN X YOCHAN
                </div>
                <div className="artist_box">
                    <div className="artist_line">
                        <img src="/static/nature_project/assets/img/2.main/artist_line.png" alt="" />
                    </div>
                    <div className="project_oumtt_box">
                        <div className="project_oumtt">
                            <div className="artist-Bian_image_1">
                                <img className="artist-Bian_none_1" src="/static/nature_project/assets/img/2.main/Oumtt_Bian_1.png" alt="" />
                                <img className="artist-Bian_active" src="/static/nature_project/assets/img/2.main/Oumtt_Bian_1_active.png" alt="" />
                            </div>
                            <div className="project_oumtt-content">
                                <div className="project_oumtt-name">
                                    Project Oumtt
                                </div>
                                <div className="project_oumtt-text">
                                    ‘예술을 움 틔우다’ 라는 슬로건에서 비롯되었으며,
                                    <br />‘작은 씨앗이 결실을 맺기 위해 자연을 만나 자라듯,
                                    <br />자연히 할 수 있는 표현의 시작으로부터 누구나의 마음 속
                                    <br />예술을 움 틔워 향유시키다’ 라는 뜻을 가지고 있습니다.
                                    <br />
                                    <br />예술의 접근성과 한계에, 미디어 매체를 이용하고
                                    <br />신선하고 다양한 시도를 통해 관객에게 한 발 더 다가가,
                                    <br />많은 사람들에게 예술을 향유시키는데 목적이 있습니다.
                                </div>
                                <div className="project_oumtt-about">
                                    <A className="project_oumtt_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1">About Project Oumtt<Img src="/static/nature_project/assets/img/2.main/chevron_Right.png" alt="" /></A>
                                </div>
                            </div>
                            <div className="artist-Bian_image_2">
                                <img className="artist-Bian_none_2" src="/static/nature_project/assets/img/2.main/Oumtt_Bian_2.png" alt="" />
                                <img className="artist-Bian_hover" src="/static/nature_project/assets/img/2.main/Oumtt_Bian_2_hover.png" alt="" />
                            </div>
                        </div>

                        <div className="art-festival">
                            <div className="artist-Yochan_image_1">
                                <img className="artist-Yochan_none_1" src="/static/nature_project/assets/img/2.main/Oumtt_Yochan_1.png" alt="" />
                                <img className="artist-Yochan_active" src="/static/nature_project/assets/img/2.main/Oumtt_Yochan_1_active.png" alt="" />
                            </div>
                            <div className="artist-Yochan_image_2">
                                <img className="artist-Yochan_none_2" src="/static/nature_project/assets/img/2.main/Oumtt_Yochan_2.png" alt="" />
                                <img className="artist-Yochan_hover" src="/static/nature_project/assets/img/2.main/Oumtt_Yochan_2_hover.png" alt="" />
                            </div>
                            <div className="art-festival-content">
                                <div className="art-festival-name">
                                    Monthly Art Festival
                                </div>
                                <div className="art-festival-text">
                                    장르는 구분하되, 움직임과 사고, 사운드와 표현에 제한을
                                    <br /> 두지 않는, 하나의 기준에 국한되지 않음을 추구하는 -
                                    <br />‘넓은 가치의 목적을 가진 작업’을 통해 우리의 삶의 가장
                                    <br />밀접한 곳에서 일어났던 일들, 그리고 일어나고 있는 일들,
                                    <br />또한 일어날 일들까지 고찰하고 관찰합니다.
                                    <br />
                                    <br />매번 실험적이고 다양한 방식으로 해석함을 통해,
                                    <br />누구나 이해하고 공감할 수 있는 작품을 제작하여,
                                    <br /> 궁극적으로는 밝은 사회를 만들고자 합니다.
                                </div>
                                <div className="art-festival-about">
                                    <A className="art-festival_youtube" href="https://youtube.com/channel/UCcE_wQlmbSyl-vrqAI5ORwQ">About Monthlt Art Festival<Img src="/static/nature_project/assets/img/2.main/chevron_Right.png" alt="" /></A>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist
