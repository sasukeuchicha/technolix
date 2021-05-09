import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import HD from "../Images/HodMessage.jpeg"
import Aos from "aos";
import "aos/dist/aos.css";



const HodMessage =() => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, []);

    return(
        <>
        <div className="background_hod_message">
            <div className="d-flex align-items-center make-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="header-img" data-aos="fade-left">
                            <img src={HD} className="img-fluid message_img" alt="HOD pic" />
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                            <div className="text-left" data-aos="fade-right">
                                <br></br>
                                <h2>"Success is not Final<br></br>Failure is not Fatal <br></br>
                                <strong className="brand-name"> It is the courage to continue that counts</strong>"</h2>
                                <h3 className="mt-2">
                                    I wish all the &nbsp;
                                <NavLink to="/Alumni">
                                    members
                                </NavLink>
                                &nbsp; of <strong className="brand-name">Technolix</strong> to have a huge success in their life.
                                </h3>
                            </div>
                            <div className="float-right" data-aos="fade-right">
                            <br></br><br></br>
                            <h5>-Mahesh Kumar Jha</h5>
                            <h5> HOD TCE</h5>
                            <h5>CMRIT</h5>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default HodMessage