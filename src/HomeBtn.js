import React from "react";
import { Link } from "react-router-dom";
import "./HomeBtn.css"

function HomeBtn () {
    return (
        <button>
            <Link exact to="/">Back</Link>
        </button>
    );
}

export default HomeBtn;