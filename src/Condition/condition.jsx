import React, { Component } from 'react';


  
class Conditional extends Component{
    condition =1; 
    isValue=true;
   

     functionRender = () =>{
         
        var conditionalElement1 = null;
        if(this.condition === 1){
            conditionalElement1 = <span>Conditional element is 0</span>;
        }
        else if(this.isValue){
            conditionalElement1 = <span>Conditional element is true</span>;
        }
       return conditionalElement1;
       
    }
    
    click=()=>{
        alert("Clicked")
    }

    render(){
        let conditionalElement = null;
        if(this.condition === 0){
            conditionalElement = <span>Conditional element is 0</span>;
        }
        else if(this.isValue){
            conditionalElement = <span>Conditional element is true</span>;
        }
        //console.log(typeof(this.conditionalElement1))
        return(
            <div>
            <p>If..ELse  {this.condition ? <span>Value is not 0</span> : <span>value is  0</span> }</p>
            <p>If..ELse.If  {this.condition ? <span>Value is not 0</span> : this.isValue === 1 ? <span>value is  0</span> : null}</p>
            <p>execute inside render {conditionalElement}</p>
            <p>Function {this.functionRender()}</p>
            <p onClick = {this.click} > Gokul  </p>
            
     
            
            </div>
        )
    }

}

export default Conditional