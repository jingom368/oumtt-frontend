import '../../assets/css/components/1_intro_round.scss'
import '../../assets/css/components/2_artist_photo.scss'
import '../../assets/css/components/3_program_list.scss'
import '../../assets/css/components/4_event_list.scss'
import '../../assets/css/components/5_personal_information.scss'
import '../../assets/css/components/6_support_staff.scss'
import '../assets/css/1_header.scss'
import '../assets/css/2_0_main.scss'
import Introduction from './2_1_Introduction'
import Guest from './2_2_Guest'
import Withyou from './2_3_Withyou'
import Program from './2_4_Program'
import Event from './2_5_Event'
import Part2 from './2_6_Part2'
import Chair from './2_7_Chair'
import Support1 from './2_8_Support1'
import Support2 from './2_9_Support2'
import polygon from "../../assets/svg/polygon.svg"
import '../assets/css/2_1_Introduction.scss'
import IntroRound from './component/1_Intro_round'
import '../assets/css/2_2_guest.scss'
import ArtistPhoto from './component/2_Artist_photo'
import '../assets/css/2_3_withyou.scss'
import ArtistPhoto from './component/2_Artist_photo'
import '../assets/css/2_4_program.scss'
import ProgramList from './component/3_Program_list'
import '../assets/css/2_5_event.scss'
import EventList from './component/4_Event_list'
import PersonalInformation from './component/5_Personal_information'
import '../assets/css/2_6_part2.scss'
import ArtistPhoto from './component/2_Artist_photo'
import '../assets/css/2_7_chair.scss'
import chevron_Right from "../assets/svg/chevron_Right.svg"
import '../assets/css/2_8_support1.scss'
import SupportStaff from './component/6_Support_staff'
import '../assets/css/2_9_support2.scss'
import support_image from "../assets/img/support_image.png"
import '../assets/css/3_footer.scss'
import notion from "../assets/img/Notion.png"
import instagram from "../assets/img/Instagram.png"
import youtube from "../assets/img/YouTube.png"

<div className="intro_round_box">
    <div className="intro_round"></div>
    <div className="intro_line_text">{props.timetable}</div>
</div>

const artist_info = props.artist_info;
const artist_group = props.artist_group;
const artist_class = props.artist_class;
const artist_image = []
const artist_text = []
artist_image.push(
    <picture>
        <source media="(max-width:1023px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '.png')} />
        <source media="(min-width:1024px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_2.png')} />
        <img key={artist_info.name} className={artist_class + "_image_none"} alt="" src={require('../../assets/img/' + artist_group + '/' + artist_info.image + '.png')}/>
    </picture>
);
artist_image.push(
    <picture>
        <source media="(max-width:1023px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active.png')} />
        <source media="(min-width:1024px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active_2.png')} />
        <img key={artist_info.name} className={artist_class + "_image_active"} alt="" src={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active.png')}/>
    </picture>
);
artist_text.push(<div>{artist_info.team}</div>);
artist_text.push(<div>{artist_info.name}</div>);
    <div className={artist_class + "_photo_box"}>
        {artist_image}
        <div className={artist_class + "_intro row_flex"}>
            {artist_text}
        </div>
    </div>

        <div className="program_list_down_1">
        {props.title}
            <img className="program_polygon" src={polygon} alt=""/>
        </div>

<div className="event_list_1 row_flex">
<div className="event_list_number">{props.team}</div>
<select id="team1" className="event_list_choice" name="select_1" required>
    <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
    <option className="event_list_choice_1" value="바람">바람</option>
    <option className="event_list_choice_1" value="보라연기">보라연기</option>
    <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
    <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
    <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
</select>
</div>

<div className="event_list_name">이름</div>
<input type="name" className="event_name" name="event_name" autoComplete="off" maxLength="4" required />
<div className="event_list_phonenumber">전화번호</div>
<input type="phonenumber" className="event_phonenumber" name="event_phonenumber" autoComplete="off" maxLength="13" pattern="^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$" required />
<div className="event_list_notice_2">입력하신 번호로 기프티콘이 발송되오니 정확히 입력해 주세요</div>
<button name="event_list_button" className="event_list_button" onClick="button();">정답 제출하기</button>
<div className="event_list_agree">
    <div className="event_list_text">
        기프티콘 수령을 위한 <a href="https://www.notion.so/bfa7747d14b1495f9923ac8dab8ea43d">개인정보활용</a>에 동의합니다.
    </div>
    <div className="event_list_check">
        <input type="checkbox" id="check" name="event_answer[]" value="1" required />
        <label className="label" htmlFor="check"></label>
    </div>
</div>

<div className="support_staff_wrap">
<div className="support_staff_role">{support_staff.role}</div>
<div className="support_staff_name">{support_staff.name}</div>
</div>

<header>
        <nav>
            <div className="nav_home">
                <a className="oumtt_link" href="/">Main</a>
                <a className="program_link" href="/program"><div className="nav_active">Program<div className="nav_point"></div></div></a>
                <a className="nav_home_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1"><div>Oumtt</div></a>
            </div>
            <a href="https://open.kakao.com/o/gXx0f5je"><button className="nav_button">관객참여 Talk 가기</button></a>
        </nav>
</header>

<main>
<div className="item">
    <img className="main_image" alt=""/>
    <div className='item_box'><Introduction></Introduction></div>
</div>
<div className="item"><div className='item_box'><Guest ></Guest></div></div>
<div className="item"><div className='item_box'><Withyou ></Withyou></div></div>
<div className="item"><div className='item_box'><Program ></Program></div></div>
<div className="item"><div className='item_box'><Event ></Event></div></div>
<div className="item"><div className='item_box'><Part2 ></Part2></div></div>
<div className="item"><div className='item_box'><Chair ></Chair></div></div>
<div className="item"><div className='item_box'><Support1 ></Support1></div></div>
<div className="item"><div className='item_box'><Support2 ></Support2></div></div>
<div className="item"><div className='item_box'><Contact></Contact></div></div>
</main> 

const timetable = ['Intro', 'Celebration', 'With You', 'The Table', 'The Chairs']
const timetable_list = []
for(let i=0; i<timetable.length; i++) {
    timetable_list.push(<IntroRound timetable={timetable[i]}></IntroRound>)
}
        <div className="intro_title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Artist Profile & Program</div>
        <div className="intro_nature" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">‘Naturally in Nature’</div>
        <div className="intro_line"></div>
        <div className="intro_border">
            {timetable_list}
        </div>

const artist_info =  
[ 
    {team:"Celebratory Recital", name:"조아란", image:"aran"},
    {team:"Celebratory Dance", name:"김하현", image:"hyekyung"},
]
const photo_box = []
for(let i=0; i<artist_info.length; i++) {
    photo_box.push(<ArtistPhoto artist_info={artist_info[i]} artist_group="guest" artist_class="guest"></ArtistPhoto>)
}
        <div className="guset_title">Guest. Celebration</div>
        <div className="guest_photo_grid">
            {photo_box}
        </div>

const artist_info =  
[ 
    {team:"Team1", name:"오하솜", image:"hasom"},
    {team:"Team2", name:"김하현", image:"hahyeon"},
    {team:"Team3", name:"인서연", image:"seoyeon"},
    {team:"Team3", name:"김민섭", image:"minseop"},
    {team:"Team4", name:"배소현", image:"sohyun"},
    {team:"Team5", name:"한소희", image:"sohee"},
]
const photo_box = []
for(let i=0; i<artist_info.length; i++) {
    photo_box.push(<ArtistPhoto artist_info={artist_info[i]} artist_group="oumtt" artist_class="artist"></ArtistPhoto>)
}
        <div className="withyou_title">Part1. With You</div>
        <div className="withyou_profile">Dancer Profile</div>
        <div className="withyou_photo_grid">
            {photo_box}
        </div>

const title = ['바람', '보라연기', '내적댄스', '생명력에 춤을', '서로의 존재 그리고 위로']
const programlist = []
for(let i=0; i<title.length; i++) {
    programlist.push(<ProgramList title={title[i]}></ProgramList>)
}
        <div className="program_title">Program List</div>
        <div className="program_notice">*작품 주제 및 내용은 1장 진행순서와 무관합니다. </div>
        <div className="program_list_grid">
            {programlist}
        </div>

const team = ['Team 1.', 'Team 2.', 'Team 3.', 'Team 4.', 'Team 5.']
const eventlist = []
for(let i=0; i<team.length; i++) {
    eventlist.push(<EventList team={team[i]}></EventList>)
}
        <div className="event_title">Quiz Event</div>
        <div className="event_text">Part1 무용수의 움직임을 관람하신 후,
        <br/>작품명과 내용을 맞추어 제출해주세요.</div>
        <div className="event_notice">*추첨을 통해, 정답을 맞추신 분들께 기프티콘을 보내드려요.</div>
        <form action="/program" method="post" name="event_action">
            <div className="event_select"> 
                {eventlist}
            </div>
            <PersonalInformation></PersonalInformation>
        </form>

const artist_info = [
    {team:"Director", name:"강요찬", image:"yochan"},
    {team:"dancer", name:"육현진", image:"hyunjin"},
    {team:"dancer", name:"이종환", image:"jonghwan"},
    {team:"dancer", name:"김다현", image:"dahyun"},
    {team:"dancer", name:"김윤서", image:"yunseo"},
    {team:"dancer", name:"예영주", image:"youngju"},
]
const photo_box = []
for(let i=0; i<artist_info.length; i++) {
    photo_box.push(<ArtistPhoto artist_info={artist_info[i]} artist_group="dancer" artist_class="artist"></ArtistPhoto>)
}
        <div className="table_title">Part2. The Table & The Chairs</div>
        <div className="table_profile">Dancer Profile</div>
        <div className="table_photo_grid">
            {photo_box}
        </div>

            <div className="row_flex_1">
                <div className="chair_title_1">The Table</div>
                <div className="chair_text">이것은 책상이라고 부른다.
                    <br/>앉아서 밥을 먹고 공부를 하고 사무를 보는 것이라 한다.
                    <br/>
                    <br/>그러나, 우리는 이것을 책상이라고 부르지 않는다.
                </div>
            </div>
            <div className="row_flex_2">
                <div className="chair_title_2">The Chairs</div>
                <div className="chair_text">의자 위에 앉아있는 것은 무엇인가
                <br/>의자 위에 앉아있는 것은 사람이다.
                <br/>의자 위에 앉아있는 것은 사람이 아니다.
                <br/>    
                <br/>의자 위에 앉아있는 것은 무엇인가?
                </div>
            </div>
            <div className="chair_link">
                <a className="chair_notion" href="https://jazzy-second-e86.notion.site/6-11-Monthly-Art-SeoulForestival-with-You-842c0082a819449c82b2a00f57d22465"><div className="chair_link_text">More About Art Forestival<img className="chair_link_arrow" src={chevron_Right} alt="" /></div></a>
            </div>

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
    support_staff_box.push(<SupportStaff support_staff={support_staff[i]}></SupportStaff>)
}
        <div className="support_title">Naturally in Nature</div>
        <div className="support_photo">Photo</div>
        <div className="support_slide"></div>
        <div className="support_staff">Staff List</div>
        <div className="support_staff_list">
            {support_staff_box}
        </div>

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
    <div><button type="button" className="support_project_button">복사하기</button></div>
    <input type="hidden" className="support_project_value" value="신한은행 110 438 222561" />
</div>

<div className="footer_info-box">
<div className="footer_info-contact">
    Follow Us
</div>
<div className="footer_info-link">
    <a className="footer_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1">
    <img className="footer_info-link_image" src={notion} alt="" />
    <div className="footer_info-link_text">Notion</div>
    </a>
    <a className="footer_instagram" href="https://www.instagram.com/project_oumtt/">
    <img className="footer_info-link_image" src={instagram} alt="" />
    <div className="footer_info-link_text">Instagram</div>
    </a>
    <a className="footer_youtube" href="https://www.youtube.com/channel/UCjaqvJXS6w5W7EtdPT-w4aQ">
    <img className="footer_info-link_image" src={youtube} alt="" />
    <div className="footer_info-link_text">Youtube</div>
    </a>
</div>
</div>
<div className="footer_info-box">
<div className="footer_info-contact">
    Contact Us
</div>
<form action="/program" method="post" className="footer_info-click">
    <input type="contact" className="footer_input_box" name="contact" autoComplete="off" placeholder="이름 / 연락처 또는 메일" />
    <div className="footer_input_notice_1">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
    <button name="footer-submit-button2" className="footer-submit-button">연락하기</button>
</form>
<div className="footer_input_notice_2">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
</div>

<footer>
<div className="footer_info-line">
    <div className="footer_info-copyright">
        Copyrightⓒ 2022. Oumtt. All right reserved.
    </div>
</div>
</footer>