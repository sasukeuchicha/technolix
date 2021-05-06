import React from 'react';
import GPPos from "../../Images/GPPos.jpg"

const GPSWeb = () => {
    return(
        <>
            <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <center>
                            <h1>
                                Webinar on how GPS Works
                            </h1>
                        </center>
                    </div>
                        <div className="col-10 mx-auto">
                            <center>
                                <h5>Technolix Club, Department of TCE, CMRIT conducted a virtual webinar on GPS exclusively for CMR PU Students</h5>
                            </center>
                        </div>
                        <div className="col-xs-12">
                            <center>
                                <img src={GPPos} className="card-img-top" alt="Image"/>
                            </center>
                        </div>
                </div>
            </section>
        </>
    )
}



export default GPSWeb