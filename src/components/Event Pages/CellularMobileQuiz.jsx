import React from 'react';

function NewlineText1(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className="line_height_less">{str}</p>);;
    return newText;
  }

  const CellularMobileQuiz = () => {
      return(
          <section id = "header" className = "d-flex align-text-center">
              <div className="row">
                  <div className="col-10 mx-auto">
                  <center>
                             <h1>Quiz On Cellular Mobile Communication</h1>
                </center>
                  </div>
                  <div className="row">
                         <div className="col-xs-12 col-10 mx-auto">
                             <center>
                            <h5> About Event </h5>
                            <NewlineText1 text = {'The event was conducted on 26.11.2020 from 5.00 PM to 6.00 PM. \n At the beginning of the event, a few video clips were shared with the participants.  \n Based on that, questions were asked in the quiz. \n '}/>
                            </center>
                         </div>
                     </div>
                     <div className="col-xs-12 col-10 mx-auto">
                         <center>
                         <p><a href = "https://drive.google.com/drive/u/0/folders/1CRiQtQWlXqo6DZdnpAXDvMWIB57UwARN" className="btn_events"> Video Link </a></p>
                         </center>
                     </div>
              </div>
          </section>
      )
  }

  export default CellularMobileQuiz