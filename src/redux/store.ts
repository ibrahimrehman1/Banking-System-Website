import {createStore, combineReducers} from "redux";
import {customerReducer} from "./reducer";

export const store = createStore(combineReducers({customers: customerReducer}))