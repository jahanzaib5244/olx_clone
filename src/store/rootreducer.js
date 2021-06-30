import { combineReducers } from "redux";

import AuthReducer from './reducers/AuthReducer';
import ProductReducer from './reducers/ProductReducer';

const rootReducer = combineReducers({
    AuthReducer,
    ProductReducer
});


export default rootReducer;

