import React from 'react'
import '../assets/css/program/2_4_program.scss'
import ProgramList from './component/3_Program_list'


function Program() {
    const program = [
        {title: '바람', text: '바람이 분다.\n이제야 이 간절한 덫을 놓는다.'}, 
        {title: '보라연기', text: ''}, 
        {title: '내적댄스', text: '음악과 자연에 몸을 맡겨 춤을 추고 싶은 사람들을\n위해 제가 같이 춰드릴게요! 둠칫둠칫 🕺🏾'}, 
        {title: '생명력에 춤을', text: '서서히 드리워지는 그늘에\n바람과 냄새가 짙어진다.\n\n때론 나비가 되고\n때론 사슴벌레가 되고\n때론 이파리가 되어\n춤을 추자\n\n그저 바람과 함께 춤을 추자'}, 
        {title: '서로의 존재 그리고 위로', text: '지나간 엄마의 시간,\n지났던, 그리고 흐르지 않는 할머니의 시간.\n\n이제서야 흘러가는 나에게,\n자연스럽게 지나갈 내 모든시간에게,\n치열한 지금의 나에게 존재만으로도\n가장 자연하고 아름답다고,\n지나갔던 이유만으로 위로가 되는\n\n내게 가장 자연스러운 존재.'}
    ]
    const programlist = []
    for(let i=0; i<program.length; i++) {
        programlist.push(<ProgramList key={program[i].title} program={program[i]}></ProgramList>)
    }
    return ( 
        <>
            <div className="program_title">Program List</div>
            <div className="program_notice">*작품 주제 및 내용은 1장 진행순서와 무관합니다. </div>
            <div className="program_list_grid">
                {programlist}
            </div>
        </> 
    );
}
    
export default Program;