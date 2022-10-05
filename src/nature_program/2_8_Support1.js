import React from 'react'
import '../assets/css/program/2_8_support1.scss'
import SupportStaff from './component/6_Support_staff'

function Support1() {
    const support_staff =  
    [ 
        {role:"Director", name:"김비안"},
        {role:"Photo", name:"성대영"},
        {role:"Design", name:"강수빈"},
        {role:"Develop", name:"장진웅"},
        {role:"staff", name:"백나연"},
        {role:"staff", name:"이주휘"},
        {role:"staff", name:"김민희"},
    ]
    const support_staff_box = []
    for(let i=0; i<support_staff.length; i++) {
        support_staff_box.push(<SupportStaff key={support_staff[i].name} support_staff={support_staff[i]}></SupportStaff>)
    }
    return ( 
        <>
            <div className="support_title">Naturally in Nature</div>
            <div className="support_photo">Photo</div>
            <div className="support_slide"></div>
            <div className="support_staff">Staff List</div>
            <div className="support_staff_list">
                {support_staff_box}
            </div>
        </>
    );
}
    
export default Support1;