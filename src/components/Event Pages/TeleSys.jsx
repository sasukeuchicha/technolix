import React from 'react'
import quiz from "../../Images/Quiz.jpg"
const TeleSys = () => {
    return(
        <>
        <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                             <center><h1>Quiz on Telecommunication Systems</h1></center>
                     </div>
                     <div className="row">
                         <div className="col-xs-12 col-10 mx-auto">
                             <center>
                             <h3>Date: September 29th, 2020</h3>
                             <h3>Time: 5:00 PM to 6:00 PM</h3>
                             <h3>Venue: Online</h3>
                             <img src={quiz} className="card-img-top" alt="Image"/>
                             </center>
                         </div>
                     </div>
            </div>
            </section>
        </>
    )
}

export default TeleSys