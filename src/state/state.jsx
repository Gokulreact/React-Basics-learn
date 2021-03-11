import React, { Component } from 'react';

class State extends Component{

    constructor(){
        super();
        this.state = {
           name: 'Logged in',
           value:null,
           value1:null
        };
    }

   onClick = () =>{
       const name = this.state.name === 'Logged in' ? 'logged out' : 'looged in';
       this.setState({name})
   }

   onClick1 = () =>{
    const name = this.state.name === 'Logged in' ? 'logged out' : 'looged in';
    this.setState({name, value1:'test'});
}

   valueChange=(event)=>{
     this.setState({value: event.target.value})
     console.log( this.state.value)
   }

   valueChange1=(event)=>{
    this.setState({value1: event.target.value})
    console.log( this.state.value1)
  }
  
    render(){
        return(
            <div>
            <h1>State Tutorials</h1>
            <h2>Hello now i am {this.state.name}</h2>
           
            
            <input type="text" onChange={this.valueChange}/>
            <button onClick={this.onClick}>Check log</button>
            <p>{this.state.value}</p>
            <input value={this.state.value1} type="text" onChange={this.valueChange1}/>
            <button  onClick={this.onClick1}>Two way bind</button>
            <p>{this.state.value1}</p>
            

            </div>
        )
    }
}

export default State