import React from 'react'
import { NavLink } from 'react-router-dom'
import './AboutUs.css'
import AP from "../Images/AP.jpg"
import Home from './Home'
//import { BrowserRouter } from 'react-router-dom'

const AboutUs =() => {
    return(
        <>
        <section id ="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                    <div className="row">
                    <h3 className="col-10 mx-auto objective"> Our Vision:</h3>
                        <h5 className="col-9 mx-auto">To provide a platform for budding engineers to turn their ideas into reality in the filed of Telecommunication Engineering.</h5>
                        <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={AP} alt="Avatar" class="image"></img>
                                    <div class="middle">
                                        <h4>RAVEESH HEGDE</h4>
                                        <h5>FACULTY COORDINATOR</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs