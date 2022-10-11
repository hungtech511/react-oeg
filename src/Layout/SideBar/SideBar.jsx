import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SideBarLeague from "../../Components/SideBarLeague/SideBarLeague";
import "./SideBar.css";

export default function SideBar({ clickActive, setClickActive }) {
    const [active, setActive] = useState(1);
    const [leaugeClick, setLeaugeClick] = useState({});
    const fakeRegion = [
        {
            id: 1,
            name: "HOSC x OEG",
            region: "Ha Noi"
        },
        {
            id: 2,
            name: "HOSC x OEG",
            region: "Ha Noi 2"
        },
        {
            id: 3,
            name: "HOSC x OEG",
            region: "Ha Noi 3"
        },
        {
            id: 4,
            name: "HOSC x OEG",
            region: "Ha Noi 4"
        },
        {
            id: 5,
            name: "HOSC x OEG",
            region: "Ha Noi 5"
        },
        {
            id: 6,
            name: "HOSC x OEG",
            region: "Ha Noi 6"
        },
        {
            id: 7,
            name: "HOSC x OEG",
            region: "Ha Noi 7"
        }
        ,
        {
            id: 8,
            name: "HOSC x OEG",
            region: "Ha Noi 8"
        }
        ,
        {
            id: 9,
            name: "HOSC x OEG",
            region: "Ha Noi 9"
        }
        ,
        {
            id: 10,
            name: "HOSC x OEG",
            region: "Ha Noi 10"
        }
        ,
        {
            id: 11,
            name: "HOSC x OEG",
            region: "Ha Noi 11"
        }
        ,
        {
            id: 12,
            name: "HOSC x OEG",
            region: "Ha Noi 12"
        }
    ]
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="leauge-selector">
                    <div className="selector">
                        <div className="league-wrapper flex items-center">
                            <div className="league-image">
                                <img src="https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_WorldsDarkBG.png" alt="league-icon" />
                            </div>
                            <div className="league-label">
                                <div className="label-name font-bold text-white">{Object.keys(leaugeClick).length === 0 ? fakeRegion[0].name : leaugeClick.name}</div>
                                <div className="label-region font-medium text-white">{Object.keys(leaugeClick).length === 0 ? fakeRegion[0].region : leaugeClick.region}</div>
                            </div>
                        </div>
                        <BsChevronDown className="markdown text-white ml-auto" onClick={() => setClickActive(!clickActive)}/>
                    </div>
                </div>
                <div className="sidebar-content">
                <h2>KHU VỰC & SỰ KIỆN</h2>
                <ul className="sidebar-leagues">
                    {
                        fakeRegion.map((item, index) => {
                            return (
                                <SideBarLeague active={active} setActive={setActive} setLeaugeClick={setLeaugeClick} key={index} item={item} />
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    );
}
