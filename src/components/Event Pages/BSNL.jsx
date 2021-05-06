import React from 'react'
import M1 from "../../Images/M1.JPG"
import M2 from "../../Images/M2.JPG"
import M3 from "../../Images/M3.JPG"
import M4 from "../../Images/M4.JPG"
import M5 from "../../Images/M5.JPG"
import M6 from "../../Images/M6.JPG"
import M7 from "../../Images/M7.JPG"
import M8 from "../../Images/M8.JPG"
import M9 from "../../Images/M9.JPG"
import M10 from "../../Images/M10.JPG"
function NewlineText7(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }
const BSNL = () => {
    return(
        <>
            <section id = "header" className = "d-flex align-text-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <center>
                            <h1> Industrial Visit to BSNL, Mysore </h1>
                        </center>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <center>
                                <h4> About Event </h4>
                                <NewlineText7 text = {'Regional Telecom Training Centre is a premier resource Centre for telecom and Information technology studies. \n'}/>
                                <NewlineText7 text = {'It is recognized as high end training institute for students, working telecom professional, and corporate houses. \n'}/>
                                <NewlineText7 text = {'Equipped with world class state of art facilities -laboratories. It has highly knowledgeable, passionate and experienced faculty. \n'}/>
                                <NewlineText7 text = {'The students visited 4 labs, namely Broadband Lab, Switching Lab, GSM Lab and Optical Fiber Lab. '}/>
                            </center>
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
                                     <img src={M1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M4} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M5} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M6} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M7} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M8} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M9} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={M10} className="card-img-top" alt="Image"/>
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

export default BSNL