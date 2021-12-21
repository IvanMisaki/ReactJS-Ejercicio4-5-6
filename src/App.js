import logo from './logo.svg';
import './App.css';
import Clock from './components/container/Clock';
import Clockf from './components/container/ClockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Clock></Clock>*/}
        <Clockf></Clockf>
      </header>
    </div>
  );
}

export default App;
