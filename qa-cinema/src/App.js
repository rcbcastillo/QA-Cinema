import './App.css';
import OpenHrs from './Components/OpenHrs';

function App() {
  return (
    <div className="a">
      <div className='UIComponent'>
        <p>
          Blah, Blah, Blah
        </p>
        <a className='App-link'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example link
        </a>
      </div>
      <p>Opening Hours test</p>
      <OpenHrs />
    </div>
  );
}

export default App;
