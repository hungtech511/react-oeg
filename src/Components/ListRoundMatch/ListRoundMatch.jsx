import React, { useState } from 'react'

export default function ListRoundMatch() {
  const [getIndex,setGetIndex] = useState(0);
  const [renderVideo, setRenderVideo] = useState({})
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
                      setRenderVideo(item)}} className={getIndex === item.id ? "game active" : "game"} href="#">{item.id}</a>
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
  )
}
