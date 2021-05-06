import React, { useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../Images/Logo Technolix.jpg';
import Ard from '../Images/Ard.jpg'
import PQ from "../Images/PQ.png"
import Teleposter from "../Images/Teleposter.jpg"
import GPPos from "../Images/GPPos.jpg"
import II from "../Images/II.jpg"
import tower from "../Images/Tower.jpg"
import cp from "../Images/CP.jpg"
import enc from "../Images/Enc.jpg"
import ja from "../Images/Jaa.jpg"
import bsn from "../Images/BSN.jpg"
import quiz from "../Images/Quiz.jpg"
import '../index.css'

const Events =() => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, []);

return(
    <>

        <div className="my-5">
            <h1 className="text-center" data-aos="fade-up">Our Events</h1>
        </div>
        <div className ="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={tower} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Cellular Mobile Quiz</h5>
                                <NavLink className="nav-link" to= "/CellularMobileQuiz" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={enc} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                            <h5 className="card-title font-width-bolder contact_align">Cultura Event: Cryptography</h5>
                                <NavLink className="nav-link" to= "/Cryptography" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up" >
                        <img src={Teleposter} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Telecommunication Quiz</h5>
                                <NavLink className="nav-link" to= "/TelecommunicationQuiz" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={cp} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Test Your C Skills</h5>
                                <NavLink className="nav-link" to= "/CSkills" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={GPPos} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Webinar On How GPS Works</h5>
                                <NavLink className="nav-link" to= "/GPSWeb" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={PQ} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Python Quiz</h5>
                                <NavLink className="nav-link" to= "/PythonQ" className="btn_events ">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={II} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">IoT Workshop</h5>
                                <NavLink className="nav-link" to= "/IoT" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={ja} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Test Your Java Skills</h5>
                                <NavLink className="nav-link" to= "/JSkills" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={Ard} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Arduino Workshop</h5>
                                <NavLink className="nav-link" to= "/Arduino" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={bsn} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title font-width-bolder contact_align">Industrial Visit to BSNL, Mysore</h5>
                                <NavLink className="nav-link" to= "/BSNL" className="btn_events">
                                    Know more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10">
                        <div className="card" data-aos="fade-up">
                        <img src={quiz} className="card-img-top image_same" alt="Image" />
                            <div className="card-body">
                            <h5 className="card-title font-width-bolder contact_align">Quiz on Telecommunication Systems</h5>
                                <NavLink className="nav-link" to= "/TeleSys" className="btn_events">
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