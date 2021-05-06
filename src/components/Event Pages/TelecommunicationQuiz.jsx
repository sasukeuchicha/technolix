import React from 'react';
import { NavLink } from 'react-router-dom';
import Teleposter from "../../Images/Teleposter.jpg"

const TelecommunicationQuiz =() => {
    return(
        <>
            <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                             <center><h1>Telecommunication Quiz</h1></center>
                     </div>
                     <div className="row">
                         <div className="col-xs-12 col-10 mx-auto">
                             <center>
                             <h3>Date: May 30th, 2020</h3>
                             <h3>Time: 5:00 PM to 6:00 PM</h3>
                             <h3>Venue: Online</h3>
                             <img src={Teleposter} className="card-img-top" alt="Image"/>
                             </center>
                         </div>
                     </div>
            </div>
            </section>
        </>
    )
}

export default TelecommunicationQuiz