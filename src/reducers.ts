import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {userDataReducer} from "./userData/userDataReducers";
import {toolsReducer} from "./redux/Tools/toolsReducer";


export const rootReducer = combineReducers({
    userData: userDataReducer,
    tools:toolsReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>