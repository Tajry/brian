import { numberReducer ,numberArrReducer} from "./reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    numberCount:numberReducer,
    // numberArray:numberArrReducer,
})




export default rootReducers;