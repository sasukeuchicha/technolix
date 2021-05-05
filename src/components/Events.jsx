import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from '../Images/Logo Technolix.jpg'

const Events =() => {
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Our Events</h1>
            </div>
            <div className ="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Cellular Mobile Quiz</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Quiz On Telecommunication System</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Telecommunication Quiz</h5>
                                    <NavLink className="nav-link" to= "/TelecommunicationQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Quiz On Global Positioning System</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Webinar On How GPS Works</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Python Quiz</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events ">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={logo} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">IOT Workshop</h5>
                                    <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                        Know more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Events