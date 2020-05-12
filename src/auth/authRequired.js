import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

import {getAuthData} from "./selectors";

function authRequired(WrappedComponent) {

    return function (props) {

        if (props.loggedIn) {
            return <WrappedComponent {...props}/>
        } else {
            return <Redirect to={{
                pathname: '/login',
                state:{from:props.location}
            }} />
        }

    }
}

// export default authRequired;

function mapStateToProps(state) {
    return {
        ...getAuthData(state)
    }
}

export default compose(
    connect(mapStateToProps),
    authRequired
);