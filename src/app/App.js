import React from "react";

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import NavigationBar from "./NavigationBar";
import configureStore from "./store";
import ls from "../helpers/localStorage";
import {getFavorites} from "../user/actions";
import Routes from "./Routes";
import {getToken} from "../auth/selectors";

function App() {

    const store = configureStore({
        auth: ls.getAuthData()
    });

    // console.log("store.getState", store.getState());
    store.dispatch(getFavorites(getToken(store.getState())));

    return (
        <Provider store={store}>

            <BrowserRouter>
                <NavigationBar/>
                <Routes/>
            </BrowserRouter>

        </Provider>
    );
}

export default App;