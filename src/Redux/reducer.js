import { combineReducers } from "redux";
import loginReducer from "./loginSlice";
import registrationReducer from './registartionSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer
});

export default rootReducer;