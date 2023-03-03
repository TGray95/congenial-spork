import logo from './logo.svg';
import './App.css';
import GameGroup from './components/GameGroup';


function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>
      <GameGroup
      name="Board Game Group"
      game="Monolopy"
      schedule="Every Wednesday at 7pm"
      description="We love playing Monopoly and welcome new members to join us!"
      />
    </div>
    </div>
  );
}

export default App;
