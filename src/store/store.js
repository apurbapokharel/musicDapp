import { createStore, applyMiddleware } from "redux";
import allReducers from "./index";

import thunk from 'redux-thunk';


const store = createStore(allReducers, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//TODO::lets see what we can do

export default store;