import React, { useState } from 'react'
import '../../assets/css/program/components/2_artist_photo.scss'

function ArtistPhoto(props) {    
    const artist_info = props.artist_info;
    const artist_group = props.artist_group;
    const artist_class = props.artist_class;
    const artist_image = []
    const artist_text = []
    const [imagechange, setImagechange] = useState('_image_none');
    const [pngchange, setPngchange] = useState('.png');
    const [png2change, setPng2change] = useState('_2.png');
    artist_image.push(
        <picture>
            <source media="(max-width:1023px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + pngchange)} />
            <source media="(min-width:1024px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + png2change)} />
            <img key={artist_info.name} className={artist_class + imagechange} alt="" src={require('../../assets/img/' + artist_group + '/' + artist_info.image + pngchange)} 
            onClick={() => SetActive()}/>
        </picture>
    );

    function SetActive () {
        if (imagechange === '_image_none') {
            setImagechange('_image_active');
            setPngchange('_active.png');
            setPng2change('_active_2.png');
            console.log(imagechange)
        } else {
            setImagechange('_image_none');
            setPngchange('.png');
            setPng2change('_2.png');
        }
    }

    artist_text.push(<div>{artist_info.team}</div>);
    artist_text.push(<div>{artist_info.name}</div>);
    return (
        <div className={artist_class + "_photo_box"}>
            {artist_image}
            <div className={artist_class + "_intro row_flex"}>
                {artist_text}
            </div>
        </div>
    );
}
    
export default ArtistPhoto;