import React from "react";
import soda from "./soda.png";
import HomeBtn from "./HomeBtn";

function Soda () {
    return (
        <>
            <h1>Soda!</h1>
            <img src={soda} alt={soda}></img>
            <div><HomeBtn /></div>
        </>
    )
}

export default Soda;