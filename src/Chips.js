import React, { useState } from "react";
import BuyBtn from "./BuyBtn";
import chips from "./chips.png";
import HomeBtn from "./HomeBtn";
import "./Chips.css";

function Chips () {
    const [items, setItems] = useState([]);

    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setItems(prevItems => [...prevItems, { x, y }]);
      }
    
    const image = items.map((item, i) => (
        <img key={i} src={chips} alt={chips} className="Item" style={{ top: `${item.y}px`, left: `${item.x}px` }} />
    ));

    return (
        <>
            <h1>Chips!</h1>
            {image}
            <div><HomeBtn /> <BuyBtn handleClick={handleClick} /></div>
        </>
    )
}

export default Chips;