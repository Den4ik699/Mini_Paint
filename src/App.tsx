import React from 'react';
import './App.css';
import {rootReducer} from './reducers'
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import MainPageContainer from "./Components/MainPage/MainPageContainer";
import {BrowserRouter, Route} from "react-router-dom";
import AuthContainer from "./Components/Auth/AuthContainer";


const store = createStore(rootReducer, composeWithDevTools());


const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route path="/main" render={() => (
                    <MainPageContainer/>
                )}/>

                <Route exact path="/" render={() => (
                    <AuthContainer/>
                )}/>
                {/*<TestComp/>*/}
            </Provider>
        </BrowserRouter>

    );
}

export default App;
