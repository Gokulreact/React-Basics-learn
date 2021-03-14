import React from 'react';
import {connect} from 'react-redux';
import { COUNTER_INCREMENT, COUNTER_DECREMENT} from './reduxbasics'

let Reactredux = (props) => {
    console.log(props.count)
    return <h1>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    React redux example count {props.count}</h1>

}

const mapStateToProps  =(state)=>{
    return{
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increment: () =>{
                dispatch({type: COUNTER_INCREMENT})
        },
        decrement: () =>{
            dispatch({type: COUNTER_DECREMENT})
          

        }
    }
}
//export default connect(mapStateToprops, null)(ReactRedux);

//export default connect(mapStateToProps, mapDispatchToProps)(Reactredux);
export default Reactredux