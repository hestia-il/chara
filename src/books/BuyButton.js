import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function BuyButton(props) {

    let history = useHistory();

    const handleBuyNow = (e) => {
        e.stopPropagation();
        console.log("Buy Button", props);
        history.push({
            pathname: '/shoppingcart',
            state: {...props}
        });
    };

    return (
        <Button
            onClick={handleBuyNow}
            variant="outline-dark">
            Buy NOW
        </Button>
    )
}

export default BuyButton;