import React from 'react';
//import { BrowserRouter } from 'react-router-dom'
import './Contact.css'
import "../index.css"
import AP from "../Images/AP.jpeg"
import Gautham from "../Images/Gautham.jpg"
import Jayanth from "../Images/Jayanth.jpg"

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }
const Contact =() => {
    return(
        <>
        <section id ="header" className="d-flex align-text-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <center><h1>Contact Us</h1></center> 
                        </div>
                        <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={AP} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Prof. Raveesh Hegde</h5>
                                    <p></p>
                                    <NewlineText text={'Faculty Coordinator \n Mail: raveesh.h@cmrit.ac.in \n Phone Number: +91 9060061262'} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={Gautham} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Gautham Krishna Kumar</h5>
                                    <p></p>
                                    <NewlineText text={'Student Coordinator \n Mail: jgau17te@cmrit.ac.in \n Phone Number: +91 9611118236'} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                            <img src={Jayanth} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Jayanth K</h5>
                                    <p></p>
                                    <NewlineText text={'Student Coordinator \n Mail: jaya17te@cmrit.ac.in \n Phone Number: +91 7619189825'} />
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

export default Contact