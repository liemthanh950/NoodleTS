import { combineReducers } from "redux";

import NoodlesReducer from './Noodlereducer'

let reducers =combineReducers({
    NoodlesReducer: NoodlesReducer,
})

const rootReducer = (state, action ) => {
    
    return reducers(state, action);
}

export default rootReducer;