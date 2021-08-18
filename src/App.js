import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Cookies from "./Cookies";
import Nuts from "./Nuts";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <NavBar />
                <Route exact path="/">
                  <VendingMachine />
                </Route>
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/soda">
                    <Soda />
                </Route>
                <Route exact path="/cookies">
                    <Cookies />
                </Route>
                <Route exact path="/nuts">
                    <Nuts />
                </Route>
            </BrowserRouter>
    </div>
  );
}

export default App;
