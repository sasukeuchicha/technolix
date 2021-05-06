import React from 'react';
import I1 from "../../Images/I1.jpg"
import I2 from "../../Images/I2.jpg"
import I3 from "../../Images/I3.jpg"
function NewlineText4(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }
const IoT = () => {  
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
                                <NewlineText4 text = {'From home automation to remote health monitoring systems, from autonomous vehicles to smart consumer electronics devices, Internet of Things (IoT) has influenced our lives in a significant manner. \n Department of Telecommunication Engineering, CMRIT is organized a Two-Day Workshop on Internet of Things (IoT) in association with Tequed Labs, Bengaluru. Following topics were discussed in the workshop. \n'}/>
                                <NewlineText4 text = {'The following things were taught to students during the workshop \n'}/>
                                <NewlineText4 text = {'· Introduction to IoT \n · Architecture, Components \n · Software introduction and installation \n'}/>
                                <NewlineText4 text = {'· Interfacing sensors and NodeMCU \n · Controlling devices remotely using Blynk App \n · Open cloud platform to upload and analyze data \n · Sending sensor values to cloud'}/>
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
                                     <img src={I1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={I2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={I3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             </div>
                             </div>
                </div>
            </section>
        </>
    )
}

export default IoT