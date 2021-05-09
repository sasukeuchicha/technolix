import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" exact aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/HodMessage">Message From HOD</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Events">Events</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Alumni">Alumni</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/OtherClubs">Other Clubs</NavLink>
                        </li>                     
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    </div>
    </>
    );
};

export default Navbar;