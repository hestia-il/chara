import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import BooksList from "../books/BooksList";
import Book from "../books/Book";
import LandingPage from "../auth/LandingPage";
import FavoritesPage from "../user/FavoritesPage";
import AccountPage from "../user/AccountPage";
import ShoppingCart from "../shopping/ShoppingCart";

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" render={ props => <LandingPage {...props} authMode={"login"}/>}/>
            <Route exact path="/register" render={ props => <LandingPage {...props} authMode={"register"}/>}/>
            <Route exact path="/favorites" component={FavoritesPage}/>
            <Route exact path="/shoppingcart" component={ShoppingCart}/>
            <Route exact path="/account" component={AccountPage}/>
            <Route exact path="/books" component={BooksList}/>
            <Route exact path="/books/book/:id" component={Book}/>
            <Route component={NoMatch}/>
        </Switch>
    );
}

export default Routes;