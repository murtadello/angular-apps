
import { createReducer, on} from "@ngrx/store"



import { decrement, increment, reset, update, customincrement,changeChannelName} from "./counter.actions"
import { initialState } from "./counter.state"

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) =>{
    return {
        ...state,
        counter: state.counter+1,
    };
    }),
    on(decrement, (state)=>{
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(update, (state)=>{
        return {
            ...state,
            counter:12
        }
    }),
    on(customincrement,(state, action)=>{
        console.log(action);
        
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeChannelName, (state) => {
        return{
            ...state, 
            channelName: 'Taraneh Music Center'
        }
    })

    
    

);

export function counterReducer(state, action){
    return _counterReducer(state, action);
}