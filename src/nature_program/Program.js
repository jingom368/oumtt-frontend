import React from 'react'
import Tag from '../Tag';

import '../assets/css/program/2_0_main.scss'
import Introduction from './2_1_Introduction'
import Guest from './2_2_Guest'
import Withyou from './2_3_Withyou'
import Program from './2_4_Program'
import Event from './2_5_Event'
import Part2 from './2_6_Part2'
import Chair from './2_7_Chair'
import Support1 from './2_8_Support1'
import Support2 from './2_9_Support2'
import Contact from './2_10_Contact'

function Main() {

    const tags = [
        {tag:Guest, img:"", display:"none"},
        {tag:Withyou, img:"", display:"none"},
        {tag:Program, img:"", display:"none"},
        {tag:Event, img:"", display:"none"},
        {tag:Part2, img:"", display:"none"},
        {tag:Chair, img:"", display:"none"},
        {tag:Support1, img:"", display:"none"},
        {tag:Support2, img:"", display:"none"},
        {tag:Contact, img:"", display:"none"},
    ]

    let tag = []
    tag = tags.map((list) => { 
        return(<Tag key={list.tag} tag={list.tag} img={list.img} display={list.display}></Tag>)
    })

    return ( 
    <div className="program">
        <div className="item">
            <img className="main_image" alt=""/>
            <div className='item_box'><Introduction></Introduction></div>
        </div>
        {tag}
    </div> 
    );
}

export default Main;



