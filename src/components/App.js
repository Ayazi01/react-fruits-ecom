import React from "react";
import {items} from "../data.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header";
import About from "./about";
import Home from "./home";
import ListingGrid from "./ListingGrid.js";
import ItemDetails from "./ItemDetails.js";
// import ListingGrid from "./ListingGrid.js";
const App = () => {
    return (
    <Router>
        <div >
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route path = "/items/:itemId" exact>
                <ItemDetails/>
            </Route>
        </Switch>
        </div>
    </Router>
    )
};

export default App;
