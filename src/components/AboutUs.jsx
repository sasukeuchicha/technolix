import React from 'react'
import { NavLink } from 'react-router-dom'
import './AboutUs.css'
import AP from "../Images/AP.jpeg"
import HOD from '../Images/HOD.JPG'
import Gautham from '../Images/Gautham.jpg'
import Spoorthi from '../Images/Spoorthi.jpeg'
import Shreya from '../Images/Shreya.jpeg'
import Jayanth from '../Images/Jayanth.jpg'
import Home from './Home'
//import { BrowserRouter } from 'react-router-dom'

const AboutUs =() => {
    return(
        <div className=" background_about_us">

            <div className="container-fluid nav_bg align-items-center">
                <div className="row">
                <div className="col-10 mx-auto">
                <br></br>
                    <h3 className="col-10 mx-auto "> Our Vision:</h3>
                    <h5 className="col-9 mx-auto">
                        To provide a platform for budding engineers to turn their ideas into reality in the filed of
                        Telecommunication Engineering.
                    </h5>
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <h3 className=""><u>Technolix Mission :</u></h3>
                        <h5 className="mx-auto col-11">
                            The Technolix club was created as a non profit club which had helped many students since
                            its inception from 2013. We perform many activities regularly to nurture students and get them 
                            up to date with the 
                            current technologies. There will also be many sessions and activities held at campus. 
                            
                        </h5>
                        <h1 className="mx-auto ">Faculty coordinators</h1>

                            <div className="d-flex">
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={HOD} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Prof. Mahesh Kumar Jha</h4>
                                        <h5>FACULTY COORDINATOR</h5>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={AP} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Prof. Raveesh Hegde</h4>
                                        <h5>FACULTY COORDINATOR</h5>
                                    </div>
                                    </div>   
                                </div>                               
                            </div>
                            <h1 className="mx-auto objective">Student coordinators</h1>
                            <div className="d-flex">
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={Gautham} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Gautham Krishna Kumar</h4>
                                        <h5>STUDENT COORDINATOR</h5>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={Spoorthi} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Spoorthi Suresh</h4>
                                        <h5>STUDENT COORDINATOR</h5>
                                    </div>
                                    </div>   
                                </div> 
                                <div className="col-md-4 col-10 ">
                                    <div class="container">
                                    <img src={Shreya} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Shreya S</h4>
                                        <h5>STUDENT COORDINATOR</h5>
                                    </div>
                                    </div>   
                                </div>
                                <div className="col-md-4 col-10">
                                    <div class="container">
                                    <img src={Jayanth} alt="Avatar" className="image"></img>
                                    <div class="middle">
                                        <h4>Jayanth K</h4>
                                        <h5>STUDENT COORDINATOR</h5>
                                    </div>
                                    </div>   
                                </div>                              
                            </div>
                        </div>
                        
                    </div>   
                </div>
                </div>
                </div>

            </div>
    )
}

export default AboutUs