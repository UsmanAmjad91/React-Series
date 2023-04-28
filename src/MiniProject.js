import React from "react";
// import "./App.css";
// import "./index.css";
import "./MiniProject.css";

    let newDate = new Date();
    let hour = newDate.getHours("HH");
    let minute = newDate.getMinutes("mm");
    let second = newDate.getSeconds("ss");
    // HH:mm:ss  
    

    newDate.toLocaleTimeString();

        function MiniProject() {
            if(hour>5 && hour<12) {
          return (
            <>
         <div className="uc">
         <h1 className="greetings">Hello Sir, <span>Good Morning</span> </h1>
         </div>
            </>
          );
            }else if(hour>11 && hour<16){
           return (
                <>
                  <div className="uc">
                 <h1 className="greetings">Hello Sir,<span>Good Afternoon</span></h1>
                 </div>
                </>
              );
            }else if(hour>15 && hour<20){
                return (
                    <>
                      <div className="uc">
                    <h1 className="greetings">Hello Sir,<span>Good Evening</span></h1>
                    </div>
                    </>
                );
            }else if(hour>19 && hour<24){
                return (
                    <>
                   <div className="uc">
                    <h1 className="greetings">Hello Sir ,<span>Good Night</span></h1>
                    </div>
                    </>
                );
            }
            else if(hour>23 && hour<2){
                return (
                    <>
                      <div className="uc">
                    <h1 className="greetings">Hello Sir ,<span>Good Midnight</span> </h1>
                    </div>
                    </>
                );
            }else if(hour>1 && hour<5 ){
                return (
                    <>
                      <div className="uc">
                    <h1 className="greetings">Hello Sir, <span>After Midnight</span></h1>
                    </div>
                    </>
                );
            }else{
                return (
                    <>
                      <div className="uc">
                    <h1 className="greetings">Hello Sir,<span>Early Morning</span></h1>
                    </div>
                    </>
                );
            }
        }

export default MiniProject;
