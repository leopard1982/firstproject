import Headers from './main/Headers';
import Contents from './main/Contents';
import Footers from './main/Footers';
import './App.css';

function App() {
  let date = new Date() ;

  return (
    <div className="App">
      <Headers></Headers>
      <Contents></Contents>
      <Footers tanggal={date}></Footers>
    </div>
  );
}

export default App;
