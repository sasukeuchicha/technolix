import React from 'react';
import PQ from "../../Images/PQ.png"
import PQ1 from "../../Images/PQ1.jpg"
import PQ2 from "../../Images/PQ2.jpg"
import PQ3 from "../../Images/PQ3.jpg"
import PQ4 from "../../Images/PQ4.jpg"
import PQ5 from "../../Images/PQ5.jpg"

const PythonQ = () => {
    return(
        <>
            <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <center>
                            <h1>
                                Python Quiz
                            </h1>
                        </center>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-10 mx-auto">
                        <img src={PQ} className="card-img-top" alt="Image"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <center>
                                <h4>
                                    Photos from the event
                                </h4>
                            </center>
                        </div>
                    </div>
                    <div className="col-10 mx-auto">
                         <div className="row">
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={PQ1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={PQ2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={PQ3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={PQ4} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={PQ5} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             </div>
                             </div>
                </div>
            </section>
        </>
    )
}

export default PythonQ