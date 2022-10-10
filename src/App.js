import './App.css';
import './Responsive.css';
import SideBar from './Layout/SideBar/SideBar';
import List from './Layout/List/List';

function App() {
  return (
    <div className="App">
      <div className="vods">
        <SideBar/>
        <List/>
      </div>
    </div>
  );
}

export default App;
