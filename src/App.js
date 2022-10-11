import './App.css';
import './Responsive.css';
import SideBar from './Layout/SideBar/SideBar';
import { BsChevronDown } from "react-icons/bs";
import List from './Layout/List/List';
import { useState } from 'react';

function App() {
  // State mở mobile sidebar
  const [openSideBar,setOpenSideBar] = useState(false)

  // State cho sidebar
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
  // handle function cho component side bar league
  const handleChangeActive = (id,item) =>{
    setActive(item.id);
    setLeaugeClick(item)
}
// state cho tabs
const [activeTab,setActiveTab] = useState(1)

const fakeTabs = [
    {
        id:1,
        name: "Valorant"
    },
    {
        id:2,
        name: "Lmht"
    },
    {
        id:3,
        name: "Liên quân mobile"
    }
]

// State cho list round match
const [getIndex,setGetIndex] = useState(0);
const [renderVideo, setRenderVideo] = useState({})
const [toggleVideo,setToggleVideo] = useState(false)
const fakeVideo = [
  {
    id:1,
    content: "H8kqPkEXP_E"
  },
  {
    id:2,
    content: "I-MSIqTVi6s"
  },
  {
    id:3,
    content: "AnMhdn0wJ4I"
  },
  {
    id:4,
    content: "AnMhdn0wJ4I"
  },
  {
    id:5,
    content: "AnMhdn0wJ4I"
  }
]
  return (
    <div className="App scrollbar">
      <div className={openSideBar ? "vods active" : "vods"}>
        {/* <SideBar clickActive={openSideBar} setClickActive={setOpenSideBar}/> */}
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
                        <BsChevronDown className="markdown text-white ml-auto" onClick={() => setOpenSideBar(!openSideBar)}/>
                    </div>
                </div>
                <div className="sidebar-content">
                <h2>KHU VỰC & SỰ KIỆN</h2>
                {/* Side bar league */}
                <ul className="sidebar-leagues">
                    {
                        fakeRegion.map((item, index) => {
                            return (
                              <li className={`${active === item.id ? 'sidebar-league selected' :'sidebar-league'}`} onClick={() => handleChangeActive(item.id,item)}>
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
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
        
        {/* <List/> */}
        <div className="list">
          {/* Component Tabs */}
        <div className="list-tab">
    {
        fakeTabs.map((tab,index)=>{
            return(
                <button onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? 'active' :''}`} key={index}>{tab.name}</button>
            )
        })
    }
</div>
          {/* Component Tabs */}

{/* Component List Round Match */}
            <>
                      
            <div className="list-round text-white">
        <h2 className="title font-medium">
          <span className='type'>Đấu loại</span> - <span className='type'>Vòng 1</span> - <span className="date font-normal">Thứ Bảy, 3 tháng 9</span>
        </h2>
      </div>
      <div className="list-match text-white">
        <div className="match-wrapper">
          <div className="list-teams">
            <div className="list-team">
              <div className="list-team-name font-bold">GAM</div>
              <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png" alt="team" />
            </div>
            <div className="result">
              <div className="result-first-team font-bold">3</div>
              <div className="icon">-</div>
              <div className="result-second-team font-bold">2</div>
            </div>
            <div className="list-team">
              <div className="list-team-name font-bold order-2">GAM</div>
              <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png" alt="team" />
            </div>
          </div>
          <div className="game-selector text-white">
            <div className="games">
              <label>Trận</label>
              {
                fakeVideo.map((item,index)=>{
                  return(
                    <a key={item.id} onClick={(e) =>{
                      e.preventDefault();
                      setGetIndex(item.id);
                      setRenderVideo(item);
                    }} className={getIndex === item.id ? "game active" : "game"} href="#">{item.id}</a>
                  )
                })
              }
            </div>
          </div>
        </div>
        {
              Object.keys(renderVideo).length > 0 && <div className="video-wrapper">
                <iframe className="iframe-test" src={`https://www.youtube.com/embed/${renderVideo.content}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div> 
            }
      </div>
            </>
        </div>
      </div>
    </div>
  );
}

export default App;
