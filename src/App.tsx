import React from 'react';
import './App.css';
import {rootReducer} from './reducers'
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import MainPageContainer from "./Components/MainPage/MainPageContainer";
import {Route, useLocation} from "react-router-dom";
import AuthContainer from "./Components/Auth/AuthContainer";
import Header from "./Components/Header/Header";
import SavedPicturesContainer from "./Components/SavedPictures/SavedPicturesContainer";


const store = createStore(rootReducer, composeWithDevTools());


const App = () => {
    const location = useLocation();
    return (
        <Provider store={store}>
            {location.pathname !== "/" && <Header/>}
            <Route path="/main" render={() => (
                <MainPageContainer/>
            )}/>
            <Route path="/savedPictures" render={() => (
                <SavedPicturesContainer/>
            )}/>
            <Route exact path="/" render={() => (
                <AuthContainer/>
            )}/>
            {/*<TestComp/>*/}
        </Provider>
    );
}

export default App;
