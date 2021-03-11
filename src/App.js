
import './App.css';
import About from'./Jsx/aboutjsx' 
import Advance from'./AdvanceJS/adcancejs' ;
import Conditional from './Condition/condition';
import Map from './Map/Map';
import State from './state/state';


function App() {
  return (
    <div className="App">
      <h1>Welcome to react tutorial</h1>
      <About/>
      <Advance/>
      <Conditional />
      <Map/>
      <State/>
    </div>
  );
}

export default App;
