import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/css/program/2_9_support2.scss'
import support_image from "../assets/img/support_image.png"

function Support2() {

    // function onCopy () {
    //     document.querySelector('.support_project_value').type = 'text';
    //     document.querySelector('.support_project_value').select();
    //     let copy = document.ex('copy');
    //     document.querySelector('.support_project_value').type = 'hidden';
    //     if (copy) {
    //         alert("데이터가 복사되었습니다.");
    //     }
    // }
    return (
        <>
            <div className="support_project">Support Project</div>
            <img className="support_project_image" src={support_image} alt="" />
            <div className="support_project_text">움트의 빛나는 도약을 함께하고 지지해 주셔서 감사합니다. 
            <br/>
            <br/>프로젝트 움트는 여러분의 소중한 후원금을 통해 
            <br/>보다 많은 관객분들과, 많은 아티스트들이 상생할 수 있는
            <br/>다양하고 가치 있는 예술 프로젝트를 만들어 가겠습니다.
            </div>
            <div className="support_project_box">
                <div className="support_project_account">신한은행 110 438 222561&nbsp;</div>
                <div><CopyToClipboard text={"신한은행 110 438 222561"}>
                    <button type="button" className="support_project_button">복사하기</button>
                </CopyToClipboard></div>
            </div>
        </>
    );
}
    
export default Support2;