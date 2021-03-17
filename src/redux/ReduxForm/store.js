import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


//Actions
export const COUNTER_INCREMENT ='counter/increment';
export const COUNTER_DECREMENT ='counter/decrement';

const initialState ={
    count : 0
}



   
    const rootReducer = redux.combineReducers( {
           // counter: countReducer(state.counter, action),
           // tester: testReducer(state.tester, action),
            form: formReducer, 
        
    })

    const store =redux.createStore(rootReducer, redux.applyMiddleware(thunk));

    //store.dispatch({type: COUNTER_INCREMENT});
    export default store;