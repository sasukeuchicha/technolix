import React, {useEffect} from 'react'

import './AboutUs.css';
import AP from "../Images/AP.jpeg"
import HOD from '../Images/HOD.JPG'
import Gautham from '../Images/Gautham.jpeg'
import Spoorthi from '../Images/Spoorthi.png'
import Shreya from '../Images/Shreya.jpeg'
import Jayanth from '../Images/Jayanth.jpg'
import logo from '../Images/Logo Technolix.jpg'
import G1 from '../Images/g1.jpeg';
import G2 from '../Images/g2.jpeg';
import G3 from '../Images/g3.jpeg';
import G4 from '../Images/g4.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Aos from "aos";
import "aos/dist/aos.css";



const AboutUs =() => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, []);

    return(
        <>

            <div className="container-fluid nav_bg align-items-center" data-aos="fade-up">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <br></br>
                        <h3> Our Vision:</h3>
                        <h5>
                            To provide a platform for budding engineers to turn their ideas into reality in the filed of
                            Telecommunication Engineering.
                        </h5>
                        <br></br>
                        <div className="row">
                        <h3 className="">Technolix Mission :</h3>
                        <h5 className="col-11">
                            The Technolix club was created as a non profit club which had helped many students since
                            its inception from 2013. We perform many activities regularly to nurture students and get them 
                            up to date with the 
                            current technologies. There will also be many sessions and activities held at campus. 
                        </h5>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="carousel-wrapper"  data-aos="fade-up">
                <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight stopOnHover={false} >
                    <div>
                        <img className="img image_same2" src={logo}/>
                    </div>
                    <div>
                        <img className="img image_same2" src={G1}  />
                    </div>
                    <div>
                        <img className="img image_same2" src={G2}  />
                    </div>
                    <div>
                        <img className="img image_same2" src={G3}  />
                    </div>
                    <div>
                        <img className="img image_same2" src={G4}  />
                    </div>
                </Carousel>
            </div>
            <div className="container-fluid nav_bg align-items-center" data-aos="fade-up">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <h1>Faculty coordinators</h1>
                            <div className="row">
                            <div className="col-md-3 col-10">
                                <div className="container" >
                                <img src={HOD} className="card-img-top image" alt="Image" />
                                <div className="middle">
                                        <h4>Prof. Mahesh Kumar Jha</h4>
                                        <h5>Head Of Department</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-10">
                                <div className="container" >
                                <img src={AP} className="card-img-top image" alt="Image" />
                                <div className="middle">
                                        <h4>Prof. Raveesh Hegde</h4>
                                        <h5>Associate Professor</h5>
                                </div>
                                </div>
                            </div>
                            </div>
                        <h1>Student coordinators</h1>
                        <div className="row">
                        <div className="col-md-3 col-10">
                            <div className="container" >
                            <img src={Gautham} className="card-img-top image" alt="Image" />
                            <div className="middle">
                                    <h4>Gautham J Krishna Kumar</h4>
                                    <h5>Student Coordinator</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10">
                            <div className="container" >
                            <img src={Spoorthi} className="card-img-top image" alt="Image" />
                            <div className="middle">
                                    <h4>Spoorthi S Suresh</h4>
                                    <h5>Student Coordinator</h5>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 col-10">
                            <div className="container" >
                            <img src={Jayanth} className="card-img-top image" alt="Image" />
                            <div className="middle">
                                    <h4>Jayanth K</h4>
                                    <h5>Student Coordinator</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10">
                            <div className="container" >
                            <img src={Shreya} className="card-img-top image" alt="Image" />
                            <div className="middle">
                                    <h4>Shreya S</h4>
                                    <h5>Student Coordinator</h5>
                            </div>
                            </div>
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

export default AboutUs