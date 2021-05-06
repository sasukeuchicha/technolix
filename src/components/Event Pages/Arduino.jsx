import React from 'react'
import A1 from "../../Images/A1.JPG"
import A2 from "../../Images/A2.JPG"
import A3 from "../../Images/A3.JPG"
import A4 from "../../Images/A4.JPG"
import A5 from "../../Images/A5.JPG"
import A6 from "../../Images/A6.JPG"
import A7 from "../../Images/A7.JPG"
function NewlineText6(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }
const Arduino = () => {
    return(
        <>
           <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <center>
                            <h1> IoT Workshop </h1>
                        </center>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <center>
                                <h4> About Event </h4>
                                <NewlineText6 text = {'Every semester, Technolix Club had organised an Arduino Workshop \n'}/>
                                <NewlineText6 text = {'The Workshop Included: \n'}/>
                                <NewlineText6 text = {'· Basics of Arduino \n · Introduction to coding with Embedded-C \n · Hands-on session with Arduino kit \n'}/>
                                <NewlineText6 text = {'· Arduino Interfacing with peripherals \n · Implementing several mini projects using Arduino '}/>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <center>
                                <h3> Photos from the event</h3>
                            </center>
                        </div>
                    </div>
                    <div className="col-10 mx-auto">
                         <div className="row">
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A4} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A5} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A6} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={A7} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             </div>
                             </div>
                </div>
            </section>
        </>
    )
}

export default Arduino