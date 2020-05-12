import React from "react";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";

import authRequired from "../auth/authRequired";
import {getAccount} from "./selectors";


function AccountPage(props){

    console.log("AccountPage", props);

    return (
        <Container>
            <h3>AccountPage</h3>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        ...getAccount(state)
    }
}

export default connect(mapStateToProps)(authRequired(AccountPage));