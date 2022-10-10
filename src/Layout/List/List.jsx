import React from 'react'
import Tabs from '../Tabs/Tabs';
import './List.css';
export default function List() {
    return (
        <div className="list">
            <Tabs />
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
                                <a className='game' href="#">1</a>
                                <a className='game' href="#">2</a>
                                <a className='game' href="#">3</a>
                                <a className='game' href="#">4</a>
                                <a className='game' href="#">5</a>
                            </div>
                        </div>
                    </div>
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
                                <a className='game' href="#">1</a>
                                <a className='game' href="#">2</a>
                                <a className='game' href="#">3</a>
                                <a className='game' href="#">4</a>
                                <a className='game' href="#">5</a>
                            </div>
                        </div>
                    </div>
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
                                <a className='game' href="#">1</a>
                                <a className='game' href="#">2</a>
                                <a className='game' href="#">3</a>
                                <a className='game' href="#">4</a>
                                <a className='game' href="#">5</a>
                            </div>
                        </div>
                    </div>
                </div>
                )
            </>
            )
        </div>
    )
}
