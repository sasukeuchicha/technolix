import React from 'react';
import { NavLink } from 'react-router-dom';
import Cul2 from "../../Images/Cul2.jpeg"
import  Cul3  from "../../Images/Cul3.jpeg"
import  Cul5  from "../../Images/Cul5.jpg"
import  Cul6  from "../../Images/Cul6.jpg"

function NewlineText2(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }
const Cryptography =() => {
    return(
        <>
             <section id = "header" className = "d-flex align-text-center">
                 <div className="row">
                     <div className="col-10 mx-auto">
                         <center>
                             <h1>Cryptography</h1>
                         </center>
                     </div>
                     <br></br>
                     <br></br>
                     <br></br>
                     <div className="row">
                         <div className="col-xs-12 col-10 mx-auto">
                            <h5> About Event </h5>
                            <NewlineText2 text = {'The technolix club organised a cryptography event during Cultura 20 on March 6th, 2020 \n The task for the participants was to solve a quiz where \n they were required to convert morse codes, solve interesting puzzles and riddles\n '}/>
                         </div>
                     </div>
                     <div className="col-md-4 col-10 mx-auto">
                         <center><h4>
                             Photos from the event
                             </h4></center>
                     </div>
                     <div className="col-10 mx-auto">
                         <div className="row">
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={Cul2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={Cul3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={Cul5} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={Cul6} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </section>   
        </>
    )
}

export default Cryptography