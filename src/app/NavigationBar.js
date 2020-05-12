import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'

import {getAuthData} from '../auth/selectors'
import FavoritesIcon from "../components/FavoritesIcon";
import {getFavoritesCount} from "../user/selectors";

import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
margin-bottom: 1em;
`;


function NavigationBar(props) {

    return (
        <StyledNavBar expand="sm" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/" className="nav-link">Chara</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className={"justify-content-between"}>
                <Nav>
                    {/*<Link to="/" className="nav-link">Home</Link>*/}
                    <Link to="/books" className="nav-link">Books</Link>
                </Nav>
                <Nav>
                    <Link to="/favorites" className="nav-link">
                        <FavoritesIcon badgeNumber={props.favoritesCount}/>
                    </Link>
                    {props.loggedIn && <Link to="/account" className="nav-link">Account Settings</Link>}
                    {props.loggedIn || <Link to="/login" className="nav-link">Login</Link>}
                </Nav>
            </Navbar.Collapse>
        </StyledNavBar>
    )
}

function mapStateToProps(state) {
    return {
        ...getAuthData(state),
        ...getFavoritesCount(state)
    }
}

export default connect(mapStateToProps)(NavigationBar);