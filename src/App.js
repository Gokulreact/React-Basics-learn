
import './App.css';
import About from'./Jsx/aboutjsx' 
import Advance from'./AdvanceJS/adcancejs' ;
import Conditional from './Condition/condition';
import Map from './Map/Map';
import State from './state/state';
import Axios from './axios/axios';
import {BrowserRouter, Route} from 'react-router-dom'


const Home = (props) =>{
  return <div>Home Page</div>
}

const Test = (props) =>{
  return <div>Test Page</div>
}

const Check = (props) =>{
  return <div>Check Page</div>
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to react tutorial</h1>
      <About/>
      <Advance/>
      <Conditional />
      <Map/>
      <State/>
      <Axios/>
      <BrowserRouter>
      <Route path='/' component={Home} />
        <Route path='/test' component={Test} />
        <Route path='/check' component={Check} />
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
