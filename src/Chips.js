import React from "react";
import { Link } from "react-router-dom";
import chips from "./chips.png";
import HomeBtn from "./HomeBtn";

function Chips () {
    return (
        <>
            <h1>Chips!</h1>
            <img src={chips} alt={chips}></img>
            <div><HomeBtn /></div>
        </>
    )
}

export default Chips;