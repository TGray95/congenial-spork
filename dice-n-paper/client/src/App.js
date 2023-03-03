import logo from './components/assets/logo.svg';
import './styles/App.css';
import GameGroup from './components/GameGroup';

import Header from './components/Header';
import Home from './Pages/Home';
import ActiveGroups from './Pages/ActiveGroups';
import CreateGroup from './Pages/CreateGroup';
import Profile from './Pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/active-groups' element={<ActiveGroups/>}/>
        <Route path='/create-group' element={<CreateGroup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>


    </div>
  );
}

export default App;
