import diceReducer from './diceReducer'; 
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    dice : diceReducer
})

export default rootReducer; 