import React from 'react'
import '../assets/css/program/2_6_part2.scss'
import ArtistPhoto from './component/2_Artist_photo'

function Part2() {
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
    return (
        <>
            <div className="table_title">Part2. The Table & The Chairs</div>
            <div className="table_profile">Dancer Profile</div>
            <div className="table_photo_grid">
                {photo_box}
            </div>
        </>
    );
}
    
export default Part2;