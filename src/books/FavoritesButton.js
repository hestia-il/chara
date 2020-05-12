import React from "react";
import {connect} from "react-redux";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

import FavoritesIcon from "../components/FavoritesIcon";
import {addToFavorites, removeFromFavorites} from "../user/actions";
import {getToken} from "../auth/selectors";

function FavoritesButton({dispatch, isFavorite, token, bookId}) {

    const handleAddToFavorites = (e) => {
        e.stopPropagation();
        if(!isFavorite){
            dispatch(addToFavorites(token, bookId));
        } else {
            dispatch(removeFromFavorites(token, bookId))
        }
    };

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{show: 250, hide: 400}}
            overlay={<Tooltip id={`tooltip-bottom`}>
                {isFavorite ? 'remove from favorites': 'add to favorites'}
            </Tooltip>}>
            <Button
                onClick={handleAddToFavorites}
                variant={isFavorite ? "success" : "outline-dark"}>
                <FavoritesIcon/>
            </Button>
        </OverlayTrigger>
    )
}

function mapStateToProps(state){
    return {
        token: getToken(state)
    }
}

export default connect(mapStateToProps)(FavoritesButton);