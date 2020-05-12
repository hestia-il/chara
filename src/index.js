import ReactDOM from "react-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app/App";

// import LogRocket from "logrocket";
// LogRocket.init('5gcqx8/chara');
// https://app.logrocket.com/5gcqx8/chara/

import configLoader from "./config/loader";

configLoader().then(result => {

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
});
