import './App.css';
import OpenHrs from './Components/OpenHrs';

function App() {
  return (
    <div className="a">
      <div className='UIComponent'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <p>Opening Hours test</p>
      <OpenHrs />
    </div>
  );
}

export default App;
