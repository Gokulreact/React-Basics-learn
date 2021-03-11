import React from 'react';

const About = () => <div> Hi, {printName("welcome") } <Stateless className = {'test1'} name={"property Name"}  onClick={clicked} /> {x.print()}</div>
 

class Furniture{
    constructor(){
        this.type="wood";
    }
}
class Chair extends Furniture{ //here extends can also take a values inside a Furniture
    print(){
        console.log("print", this.type);
    }
}

var x =new Chair();//new keyword can be used to access a content inside Chair by using x


const printName=(name)=>{
    return(
        <div >This is printName {name}</div>
    )
}

const Stateless = (props) =>{
    return<div className={props.className} onClick={props.onClick}>This is propery {props.name}</div>
}

const clicked=()=>{
    alert("clicked");
  
}
export default About