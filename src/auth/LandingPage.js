import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthForm from "./AuthForm";
import {Link} from "react-router-dom";

function LandingPage(props) {

    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>

                    <h3>{props.authMode.toUpperCase()} FORM</h3>

                    <AuthForm {...props} />

                    {props.authMode === 'login' &&
                    <Link to={{
                        pathname: '/register',
                        state: props.location.state
                    }}>Not registered yet? Register!</Link>}

                </Col>

                {/*<Col><AuthForm authMode={"login"}/></Col>*/}
                {/*<Col><AuthForm authMode={"register"}/></Col>*/}
            </Row>
        </Container>
    )
}

export default LandingPage;