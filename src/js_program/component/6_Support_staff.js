import React from 'react'
import '../../assets/css/program/components/6_support_staff.scss'

function SupportStaff(props) {
    const support_staff = props.support_staff
    return (
        <div className="support_staff_wrap">
            <div className="support_staff_role">{support_staff.role}</div>
            <div className="support_staff_name">{support_staff.name}</div>
        </div>
    );
}
    
export default SupportStaff;