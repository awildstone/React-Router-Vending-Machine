import React from "react";
import "./BuyBtn.css"

function BuyBtn ({ handleClick }) {


    return (
        <button onClick={handleClick}>BUY!</button>
    );
}

export default BuyBtn;