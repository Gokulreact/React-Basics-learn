import React, { Component } from 'react';


  
class App extends Component{

    name = 'Gokul'
    constructor(){
        super();
        this.state={
            name:'react'
        }
        this.print = this.print.bind(this);
    };
 print(){
     console.log(this.name)
 }
    
  print1=()=>{
   console.log("Arrow", this.name) //Here this is have to access global variable
 }
    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <p onClick={this.print}>Click here</p>
            <p onClick={this.print1}>Arrow Function</p>
            </div>
        )
    }

}

export default App