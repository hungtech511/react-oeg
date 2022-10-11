import './App.css';
import './Responsive.css';
import SideBar from './Layout/SideBar/SideBar';
import List from './Layout/List/List';
import { useState } from 'react';

function App() {
  const [openSideBar,setOpenSideBar] = useState(false)
  return (
    <div className="App scrollbar">
      <div className={openSideBar ? "vods active" : "vods"}>
        <SideBar clickActive={openSideBar} setClickActive={setOpenSideBar}/>
        <List/>
      </div>
    </div>
  );
}

export default App;
