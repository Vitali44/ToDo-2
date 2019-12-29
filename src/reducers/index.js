import { combineReducers } from "redux";
import addItemReducer from "./addItem";

const rootReducer = combineReducers({
    addItemReducer
});
console.log(rootReducer);

export default rootReducer;