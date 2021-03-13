import React, { Component } from 'react';
import axios from 'axios'


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  
class Axios extends Component{
    constructor(){
        super();
        this.state = {
           getData : [],
           postData:{title: 'Gk'}
        }
    }


    render(){
        return(
            <div>
            <h1>Axios functions</h1>
            <button onClick={this.get}>Get</button>
            <h2>GET Function Datas</h2>
            <p>{this.state.getData.map((x, index)=>
                <div key={index}>
            
               {x.title}
                </div>
                )}</p>
            <button onClick={this.post}>Post</button>
           <p>{this.state.postData.title}</p> 
            </div>

        );
    }

    get = () =>{
        axios.get('./posts')
        .then(result =>{
            console.log(result.data)
            this.setState({getData: result.data})
        })
      
    }

    post =()=>{
        axios.post('./posts', {
            title:'Gokul',
            body:'new one',
            userID:1
        })
       
        .then(result =>{
            console.log(result.data)
            this.setState({postData : result.data})
        })
    }

}

export default Axios