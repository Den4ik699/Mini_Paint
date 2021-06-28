import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {userDataReducer} from "./userData/userDataReducers";


export const rootReducer = combineReducers({
    userData: userDataReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>