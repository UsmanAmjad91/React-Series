import React from "react";
import "./MiniProject.css";

let newDate = new Date();
let hour = newDate.getHours("HH");

const cssStyle = {

}

let greet ='';
if(hour>5 && hour<12) {
     greet = "Good Morning";
     cssStyle.color = "Red";
}else if(hour>11 && hour<16){
     greet = "Good Afternoon" ;
     cssStyle.color = "Blue";
}else if(hour>15 && hour<20){
     greet = "Good Evening" ; 
     cssStyle.color = "Green"; 
}else if(hour>19 && hour<24){
     greet = "Good Night" ;
     cssStyle.color = "Orange";  
}else if(hour>23 && hour<2){
     greet = "Good Midnight" ; 
     cssStyle.color = "Yellow";  
}else if(hour>1 && hour<5){
     greet = "After Midnight" ;  
     cssStyle.color = "White";
} else{
     greet = "Early Morning" ;
     cssStyle.color = "Black";
}

function MiniProjectSolution(){

    return(
        <>
          <div className="mini-project-solution-content">
                <div className="mini-project-solution-content-title">
                <h1 className="greetings">Hello Sir, <span style={cssStyle}>{greet}</span> </h1>
                </div>
            </div>
        </>
       );

}

export default MiniProjectSolution;