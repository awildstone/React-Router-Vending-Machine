import React from "react";
import { Link } from "react-router-dom";

function Selection () {
    return (
        <div className="Selection">
            <p><Link exact to="/chips">Chips</Link></p>
            <p><Link exact to="/soda">Soda</Link></p>
            <p><Link exact to="/cookies">Cookies</Link></p>
            <p><Link exact to="/nuts">Nuts</Link></p>
        </div>
    )
}

export default Selection;