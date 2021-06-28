import React from 'react';
import './App.css';
import {rootReducer} from './reducers'
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import MainPageContainer from "./Components/MainPage/MainPageContainer";


const store = createStore(rootReducer, composeWithDevTools());


const App = () => {
    return (
        <Provider store={store}>
            <MainPageContainer/>
            {/*<AuthContainer/>*/}
            {/*<TestComp/>*/}
        </Provider>
    );
}

export default App;
