import React from 'react'
import '../../assets/css/0_basic.scss'
import right from '../../assets/svg/right2x4.svg'
import { SText, Svg, A } from './GlobalStyle'
import right_Standard from '../../assets/svg/right2x4_5E5E5E.svg'
import right_Vestebro from '../../assets/svg/right2x4_97A287.svg'
import right_Cosis from '../../assets/svg/right2x4_007681.svg'

const Link = (props) => {

    return (
        <A href={props.href}>
            <SText mta={props.mta} mcolor={props.mcolor}>{props.children}</SText>
            <Svg src={props.right} />
        </A>
    ) 
}

export default Link

const links = [
    {text:"More About Sohyun Bae", mta:"right", right:right, href:"https://jazzy-second-e86.notion.site/Blue-0310b0ab6c2646c9aece6cf5d1fe41c0"},
    {text:"More About Yuki Page", mta:"right", right:right, href:"https://www.instagram.com/yukichen0508_photo/"},
    {text:"More About TaeHoon", mta:"right", mcolor:"#FFFFFF", right:right, href:"https://soundcloud.com/im-taehoon"},
    {text:"자만보다는 낭만", right:right, href:"https://jazzy-second-e86.notion.site/8b16fd2cace240b6866d4ffec86a51db"},
    {text:"나에게만 보이는 보물들", right:right, href:"https://jazzy-second-e86.notion.site/4abfbb004be34437b495e81e7c01cbf5"},
    {text:"More About 유목이야기", mta:"right", right:right, href:"https://www.instagram.com/paran__bada/"},
    {text:"Magazine Shelf", right:right_Standard, href:"http://standard-a.co.kr/collection/magazine-shelf-2/"},
    {text:"Chair 02", right:right_Standard, href:"http://standard-a.co.kr/collection/chair-02/"},
    {text:"Chair 05", right:right_Standard, href:"http://standard-a.co.kr/collection/chair-05/"},
    {text:"More About Standard. a", mta:"right", right:right_Standard, href:"http://standard-a.co.kr/"},
    {text:"SWAN 1600", right:right_Vestebro, href:"https://vestebro.com/product/shell-3/29/category/47/display/1/"},
    {text:"SHELL 1", right:right_Vestebro, href:"https://vestebro.com/product/shell-1/27/category/47/display/1/"},
    {text:"SHELL STOOL", right:right_Vestebro, href:"https://vestebro.com/product/shell-stool/30/category/47/display/1/"},
    {text:"More About Vestebro", mta:"right", right:right_Vestebro, href:"https://vestebro.com/"},
    {text:"COSIS Custom Carpet", right:right_Cosis, href:"https://jazzy-second-e86.notion.site/Cosis-Carpet-501948dcb1464a50b9d6a6df72f0754c#8c66210380d04d81b7be9fdc74ff2d10"},
    {text:"Design Series V", right:right_Cosis, href:"https://jazzy-second-e86.notion.site/Cosis-Carpet-501948dcb1464a50b9d6a6df72f0754c#1ca6271f4afb49f2973b73daffb45a5e"},
    {text:"More About Cosis", mta:"right", right:right_Cosis, href:"http://www.icosis.net/src/"},
]

export let linkname = []
for(let i=0; i<links.length; i++) {
    linkname[i] = links.filter((link,idx) => idx === i).map((link,idx) => {
    return <Link key={idx} href={link.href} mta={link.mta} mcolor={link.mcolor} right={link.right}>{link.text}</Link>
    })
}

const alert = (linkname) => {
    const { 0:Sohyunlink, 1:Yukilink, 2:Taehoonlink, 3:Floodwood_f, 4:Floodwood_s, 5:Floodwoodlink, 
        6:StandardA_f, 7:StandardA_s, 8:StandardA_t, 9:StandardAlink,
        10:Vestebro_f, 11:Vestebro_s, 12:Vestebro_t, 13:Vestebrolink, 
        14:Cosis_f, 15:Cosis_s, 16:Cosislink,
    } = linkname;
    return {Sohyunlink, Yukilink, Taehoonlink, Floodwood_f, Floodwood_s, Floodwoodlink, 
        StandardA_f, StandardA_s, StandardA_t, StandardAlink,
        Vestebro_f, Vestebro_s, Vestebro_t, Vestebrolink ,
        Cosis_f, Cosis_s, Cosislink,
    };
}

export const link = alert(linkname)