
import './App.css';
import About from'./Jsx/aboutjsx' 
import Advance from'./AdvanceJS/adcancejs' ;
import Conditional from './Condition/condition';
import Map from './Map/Map';
import State from './state/state';
import Axios from './axios/axios';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import { Component } from 'react';
import {Provider} from 'react-redux';
import store, {COUNTER_INCREMENT, COUNTER_DECREMENT} from './redux/reduxbasics';
import Reactredux from './redux/reactredux';
import Form from './redux/ReduxForm/reduxform';
import store1 from './redux/ReduxForm/store.js';


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

  increment = () =>{
    store.dispatch({type: COUNTER_INCREMENT});
    console.log(store.getState());//getState for get all the datas in Store
  }

  decrement = () =>{
    store.dispatch({type: COUNTER_DECREMENT});
    console.log(store.getState());
  }

  push = () =>{
    store.dispatch({type: 'push', value: Math.random()});
    console.log(store.getState());
  }

  pop = () =>{
    store.dispatch({type: 'pop'});
    console.log(store.getState());
  }


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
      <br />
      <Provider store={store}>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <button onClick={this.push}>push</button>
      <button onClick={this.pop}>pop</button>
     
      </Provider>
      <Reactredux/>
      <Provider store={store1}>
      <Form/>
      </Provider>
      
    </div>
  );
}
}

export default App;
