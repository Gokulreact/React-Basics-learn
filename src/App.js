
import './App.css';
import About from'./Jsx/aboutjsx' 
import Advance from'./AdvanceJS/adcancejs' ;
import Conditional from './Condition/condition';
import Map from './Map/Map';
import State from './state/state';
import Axios from './axios/axios';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import { Component } from 'react';


const Home = (props) =>{
  return <div>Home Page</div>
}

const Test = (props) =>{
  return <div>Test Page</div>
}

const Check = (props) =>{
  return <div>Check Page</div>
}

const Error = (props) =>{
  return <div>Error Page</div>
}


class App extends Component {
  menu = [{
    name:'Home', path: '/'
  },
  {
    name:'Test', path: '/test'
  },
  {
    name:'Check', path:'/Check'
  }
  ]
  render(){
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
      {
        this.menu.map((x, i) => 
          <Link to={x.path} key={x.i}> {x.name} </Link>
        )
      }
      <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/test' component={Test} />
        <Route path='/check' component={Check} />

       <Route  component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
