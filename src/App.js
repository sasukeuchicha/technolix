import React, { Component } from 'react';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import"../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/NavBar.jsx';
import OtherClubs from './components/OtherClubs.jsx';
import Events from './components/Events.jsx';
import CellularMobileQuiz from "./components/Event Pages/CellularMobileQuiz.jsx"
const App =() => {
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/AboutUs" component={AboutUs} />
            <Route exact path = "/Events" component={Events} />
            <Route exact path = "/OtherClubs" component={OtherClubs} />
            <Route exact path = "/Contact" component={Contact} />
            <Route exact path = "/CellularMobileQuiz" component={CellularMobileQuiz} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}

export default App