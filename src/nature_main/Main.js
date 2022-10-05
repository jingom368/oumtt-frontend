import React from 'react'
import '../assets/css/main/2_0_main.scss'
import Introduction from './1_Introduction'
import Nature from './2_Nature'
import Reservation from './3_Reservation'
import Schedule from './4_Schedule'
import Artist from './5_Artist'
import Project from './6_Project'
// import Chair from './2_7_Chair'
// import Support1 from './2_8_Support1'
// import Support2 from './2_9_Support2'
// import Contact from './2_10_Contact'

function Main() {
    return ( 
    <div className="main">
        <div className="item">
            <img className="main_image" alt=""/>
            <div className='item_box'><Introduction></Introduction></div>
        </div>
        <div className="item"><div className='item_box'><Nature></Nature></div></div>
        <div className="item"><div className='item_box'><Reservation></Reservation></div></div>
        <div className="item"><div className='item_box'><Schedule></Schedule></div></div>
        <div className="item"><div className='item_box'><Artist></Artist></div></div>
        <div className="item"><div className='item_box'><Project></Project></div></div>
        {/* <div className="item"><div className='item_box'><Contact></Contact></div></div> */}
    </div> 
    );
}

export default Main;



