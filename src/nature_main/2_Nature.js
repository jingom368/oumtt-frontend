import React from 'react'
import '../assets/css/main/2_2_Nature.scss'
import nature1 from '../assets/img/nature_main/nature_1.png'
import nature2 from '../assets/img/nature_main/nature_2.png'

function Nature() {

    return (
        <>
            <div className="nature">
                <div className="nature_box">
                    <div className="nature_title">
                        Art SeoulForestival with You
                    </div>
                    <div className="nature_text">
                        Naturally in Nature
                    </div>
                    <div className="nature_intro">
                        <div>Monthly Art</div>
                        <div>SeoulForestival</div>
                        <div>with You</div>
                    </div>
                    <div className="nature_image">
                        <img className="nature_photo_1" src={nature1} alt=""/>
                        <img className="nature_photo_2" src={nature2} alt=""/>
                    </div>
                    <div id="nature_value" className="nature_value"></div>
                    <div className="nature_value_2">-</div>
                    <div className="nature_value_3"></div>
                </div>
            </div>
        </>
    );
}

export default Nature;