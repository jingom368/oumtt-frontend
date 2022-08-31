import React, { useState } from 'react'
import '../../assets/css/program/components/3_program_list.scss'
import polygon_1 from "../../assets/svg/polygon.svg"
import polygon_2 from "../../assets/svg/polygon_1.svg"

function ProgramList(props) {
    const program = props.program;
    const [programlist, setProgramlist] = useState('program_list_down');
    const [polygon, setPolygon] = useState(polygon_1);
    const [programactive, setProgramactive] = useState('');
    function SetList() {
        if (programlist === 'program_list_down') {
            setProgramlist('program_list');
            setPolygon(polygon_2);
            setProgramactive('active');
        } else {
            setProgramlist('program_list_down');
            setPolygon(polygon_1);
            setProgramactive('');
        }
    }
    return (
        <div className={programlist} onClick={() => SetList()} >
            <div className="row_flex">
                <div className="program_list_title">{program.title}</div>
                <img className="program_polygon" src={polygon} alt=""/>
            </div>
            <div className={"program_list_text " + programactive}>{program.text}</div>
        </div>
    );
}
    
export default ProgramList;