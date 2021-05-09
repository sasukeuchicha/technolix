import React from 'react'
import Amogh from "../Images/Amogh.jpeg"
import Archita from "../Images/Archita.jpeg"
import Chandana from "../Images/Chandana.jpeg"
import Dino from "../Images/Dino2.jpeg"
import Tej from "../Images/Tej.jpeg"
import Taskeen from "../Images/Taskeen.jpeg"
import Sakshi from "../Images/Sakshi.jpeg"
import Vajra from "../Images/Vajra.jpeg"
import './Alumni.css'

const Alumni = () => {
    return(
        <>
            <section id ="header" className="d-flex align-text-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <center><h1>Previous Members of our club!</h1></center> 
                        </div>
                        <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Dino} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Dino Raju</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Associate Security Analyst
                                    <br></br>
                                    Zeiss Group
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Amogh} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Amogh MP</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Embedded System Developer
                                    <br></br>
                                    Pushkala Technologies Pvt Ltd
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Archita} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Architha K</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Software Test Engineer
                                    <br></br>
                                    Societe Generale Global Solution Centre
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Sakshi} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Sakshi Mishra</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Graduate Engineering Trainee
                                    <br></br>
                                    LTI
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Tej} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Charan Tej PV</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Data Engineer
                                    <br></br>
                                    Koch Global Business Services
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Taskeen} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Taskeen Fathima</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Associate
                                    <br></br>
                                    Ken42 EdTech Pvt. Ltd.
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Chandana} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">Chandana KS</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Datacom Engineer
                                    <br></br>
                                    Huawei
                                    </h7>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10">
                            <div className="card" >
                            <img src={Vajra} className="card-img-top flashy-img" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title font-width-bolder contact_align">CJ Vajra</h5>
                                    <center>
                                    <h7 className="card-title contact_align">
                                    Student
                                    <br></br>
                                    </h7>
                                    </center>
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

export default Alumni