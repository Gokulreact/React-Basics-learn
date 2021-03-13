import React, { Component } from 'react';
import axios from 'axios'


// axios.defaults.baseURL = '../Datas.json';
  
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
            
               <p>{x.id} : {x.title} <button onClick={this.update} >Edit</button></p>
                </div>
                )}</p>
            <button onClick={this.post}>Post</button>
           <p>{this.state.postData.title}</p> 
            </div>

        );
    }

    // get = () =>{
    //     axios.get('')
    //     .then(result =>{
    //         console.log(result)
    //        // this.setState({getData: result.data})
    //     })
      
    // }
    
    //Using Local JSON File
    get = () =>{
         axios.get('./datas.json')
     .then(result =>{
            console.log(result)
       this.setState({getData: result.data.posts})
      }).catch((err)=>{
        console.log(err);
          
       }
      )
    }
  
    //    update = () =>{

    // //     var ind = props.indexs;
    //     // console.log(typeof(props.index), props.index)
    //    var index =1 ;
    //     axios.get('./datas.json')
        
    //      .then(
    //     result =>{
    //         result.posts[index] = {postData: 'Gokul'};
    //         console.log(result.posts[index])     
    //  }
    
    //   )
    //   }
    
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