import React, { Component } from 'react';

class Map extends Component{

    users=[
        {
            name:'Gokul',
            age:21
        },
        {
            name:'Jay',
            age:20
        },
        {
          name:'anuska',
          age:22
        }
    ]

    render(){
        return(
            <div>
            <h1>Map Function</h1>
          
          {
                this.users.map((x, index, usersArray) =>{
                    return(
                        <div key={index}>
                        <p>{x.name} index value is {index} and array </p>
                        <p>{x.age}</p></div>
                    )
                    
                })
            }
            </div>
           
        )
    }
}

export default Map