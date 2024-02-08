import logo from './logo.svg';
import './App.css';

function App() {
  const nama="Suryo Adhy Chandra";
  const detail=['suryo','adhy','chandra'];
  const myfunct = () => {
    return detail[Math.floor(Math.random()*3)]
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>{myfunct()} Tetap semangat</p>
          <p>
            <ul>
              {detail.map((data)=>{
                return(
                  <li style={{listStyleType: "none"}}>{data}</li>
                  )
              })}
            </ul>
          </p>
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
  );
}

export default App;
