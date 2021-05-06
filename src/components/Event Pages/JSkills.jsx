import React from 'react';
import J1 from "../../Images/J1.jpg"
import J2 from "../../Images/J2.jpg"
import J3 from "../../Images/J3.jpg"
import J4 from "../../Images/J4.jpg"

function NewlineText5(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }

const JSkills = () => {
    return(
        <>
             <section id = "header" className = "d-flex align-text-center">
            <div className="row">
                <div className="col-10 mx-auto">
                    <center>
                        <h1>Test Your Java Skills</h1>
                    </center>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-10 mx-auto">
                        <center>
                            <h4>About Event</h4>
                            <NewlineText5 text = {'Technolix - Technical Club of Dept of TCE had organized a Java Programming skill test \n Thursday, 7.11.2019 \n 1:30pm to 3:00pm \n MP Lab, TCE'}/>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <center>
                            <h4> Photos from the event </h4>
                            <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={J1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={J2} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={J3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={J4} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                        </center>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default JSkills