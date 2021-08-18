import React from "react";
import Selection from "./Selection";
import "./VendingMachine.css";
import vending_machine from "./vending_machine.png";

function VendingMachine () {
    return (
        <div>
            <h1>Dream Machine</h1>
            <div className="row">
                <div className="collumn">
                    <div className="welcome">Hello, I am the dream machine! What are you looking to purchase today?</div>
                </div>
                <div className="collumn">
                    <img src={vending_machine} alt={vending_machine}></img>
                </div>
                <div className="collumn">
                    <Selection />
                </div>
            </div>
        </div>
    )

}

export default VendingMachine;