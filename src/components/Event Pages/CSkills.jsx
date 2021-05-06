import React from 'react';
import C1 from "../../Images/C1.jpg"
import C3 from "../../Images/C3.jpg"
import C4 from "../../Images/C4.jpg"

function NewlineText3(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }

const CSkills = () => {
    return(
        <>
        <section id = "header" className = "d-flex align-text-center">
            <div className="row">
                <div className="col-10 mx-auto">
                    <center>
                        <h1>Test Your C Skills</h1>
                    </center>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-10 mx-auto">
                        <center>
                            <h4>About Event</h4>
                            <NewlineText3 text = {'Technolix - Technical Club of Dept of TCE had organized a C Programming skill test \n Saturday, 21.09.2019 \n 1:30pm to 3:00pm \n Classroom LH406, TCE'}/>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <center>
                            <h4> Photos from the event </h4>
                            <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={C1} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={C3} className="card-img-top" alt="Image"/>
                                 </div>
                             </div>
                             <div className="col-md-4 col-10 mx-auto">
                                 <div className="card">
                                     <img src={C4} className="card-img-top" alt="Image"/>
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

export default CSkills