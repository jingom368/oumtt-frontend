import React from 'react'
import '../assets/css/main/2_6_Project.scss'

const Project = () => {
    return (
        <>
            <div class="project">
                <div class="project_box">
                    <div class="project_title">
                        OUMTT & YOCHAN’s Latest Project
                    </div>
                    <div class="project_media">
                        <iframe class="project_oumtt_1" width="328" height="184" src="https://www.youtube.com/embed/8DUKvaDyd1Y?vq=hd1080&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe class="project_oumtt_2" width="976" height="548" src="https://www.youtube.com/embed/8DUKvaDyd1Y?vq=hd1080&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="project_media_notice">
                        영상 재생 버튼을 누르고, 소리와 함께 감상해주세요
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
