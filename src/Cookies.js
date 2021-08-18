import React from "react";
import cookies from "./cookies.png";
import HomeBtn from "./HomeBtn";

function Cookies () {
    return (
        <>
            <h1>Cookies!</h1>
            <img src={cookies} alt={cookies}></img>
            <div><HomeBtn /></div>
        </>
    )
}

export default Cookies;