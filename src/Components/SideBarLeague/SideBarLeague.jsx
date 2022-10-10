import React from 'react'

export default function SideBarLeague({active,setActive,item, setLeaugeClick}) {
    const handleChangeActive = () =>{
        setActive(item.id);
        setLeaugeClick(item)
    }
    return (
        <li className={`${active === item.id ? 'sidebar-league selected' :'sidebar-league'}`} onClick={() => handleChangeActive()}>
        <div className="sidebar--league-wrapper flex items-center">
            <div className="league-image">
                <img src="https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_WorldsDarkBG.png" alt="league-icon" />
            </div>
            <div className="league-label">
                <div className="label-name font-bold text-white">{item.name}</div>
                <div className="label-region font-medium text-white">{item.region}</div>
            </div>
        </div>
    </li>
    )
}
