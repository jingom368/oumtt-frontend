import React from 'react'
import '../assets/css/program/2_3_withyou.scss'
import ArtistPhoto from './component/2_Artist_photo'

// const dancer_photo = {
//     "dancer_image": [
//       "yochan", "hyunjin", "jonghwan", "dahyun", "yunseo", "youngju",
//     ],
//     "dancer_role": [
//       "Director", "Dancer", "Dancer", "Dancer", "Dancer", "Dancer",
//     ],
//     "dancer_name": [
//       "강요찬", "육현진", "이종환", "김다현", "김윤서", "예영주",
//     ],
// }

// const oumtt_photo = {
//     "oumtt_image": [
//       "hasom", "hahyeon", "seoyeon", "minseop", "sohyun", "sohee",
//     ],
//     "oumtt_team": [
//       "Team1", "Team2", "Team3", "Team3", "Team4", "Team5",
//     ],
//     "oumtt_name": [
//       "오하솜", "김하현", "인서연", "김민섭", "배소현", "한소희",
//     ],
//   }

// const dancer_image = dancer_photo.dancer_image.map((img, index) =>
//   {
//     return <img key={index} className="artist_none" alt="~" src={require('../../assets/img/guest/' + img + '.png').default} />
//   }  
// )

// const oumtt_image = oumtt_photo.oumtt_image.map((img, index) =>
//   {
//     return <img key={index} className="artist_none" alt="~" src={require('../../assets/img/oumtt/' + img + '.png').default} />
//   }  
// )

// function Photo(props) {
//   let Image = () => {
//     return (
//       <div>
//         {dancer_image}
//       </div>
//     )
//   };

//   return <div>
//     {Image()}
//   </div>
// } 

// function Oumtt(props) {
//   let Image = () => {
//     return (
//       <div>
//         {oumtt_image}
//       </div>
//     )
//   };

//   return <div>
//     {Image()}
//   </div>
// } 

function Withyou() {
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
    return (
        <>
            <div className="withyou_title">Part1. With You</div>
            <div className="withyou_profile">Dancer Profile</div>
            <div className="withyou_photo_grid">
                {photo_box}
            </div>
        </>
    );
}

export default Withyou;