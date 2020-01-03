import { combineReducers } from "redux";
import itemReducer from "./addItem";

const rootReducer = combineReducers({
    itemReducer
});

export default rootReducer;