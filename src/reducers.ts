import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {userDataReducer} from "./redux/userData/userDataReducers";
import {toolsReducer} from "./redux/Tools/toolsReducer";
import {userDrawingsReducer} from "./redux/userDrawings/userDrawingReducers";


export const rootReducer = combineReducers({
    userData: userDataReducer,
    tools:toolsReducer,
    //userDrawings: userDrawingsReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>

