import React from "react";
import nuts from "./nuts.png";
import HomeBtn from "./HomeBtn";

function Nuts () {
    return (
        <>
            <h1>Nuts!</h1>
            <img src={nuts} alt={nuts}></img>
            <div><HomeBtn /></div>
        </>
    )
}

export default Nuts;