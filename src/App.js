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
import TelecommunicationQuiz from "./components/Event Pages/TelecommunicationQuiz.jsx"
import Cryptography from './components/Event Pages/Cryptography';
import CSkills from './components/Event Pages/CSkills';
import GPSWeb from './components/Event Pages/GPSWeb';
import PythonQ from './components/Event Pages/PythonQ';
import IoT from './components/Event Pages/IoT';
import JSkills from './components/Event Pages/JSkills';
import BSNL from './components/Event Pages/BSNL';
import Arduino from './components/Event Pages/Arduino';
import TeleSys from './components/Event Pages/TeleSys';
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
            <Route exact path = "/Cryptography" component={Cryptography} />
            <Route exact path = "/TelecommunicationQuiz" component={TelecommunicationQuiz} />
            <Route exact path = "/CSkills" component={CSkills} />
            <Route exact path = "/GPSWeb" component={GPSWeb} />
            <Route exact path = "/PythonQ" component={PythonQ} />
            <Route exact path = "/IoT" component={IoT} />
            <Route exact path = "/JSkills" component={JSkills} />
            <Route exact path = "/Arduino" component={Arduino} />
            <Route exact path = "/BSNL" component={BSNL} />
            <Route exact path = "/TeleSys" component={TeleSys} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}

export default App