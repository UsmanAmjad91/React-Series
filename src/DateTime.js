import React from 'react';
import './App.css';

const fname = "Usman";
const lname ="Amjad";
let newDate = new Date();
const date = newDate.getDate();
const month = newDate.getMonth()+1;
const year = newDate.getFullYear();

function DateTime(){
    return (
        <>
        
        <b>Date Time</b>
        <h1>{`${fname } ${lname}`}</h1>
        <h4>
        {` Date is ${date} . Month is ${ new Date().toLocaleString("en-US", { month: "long" }) } => ${month} . Year is ${year} . ${newDate}`} 
        </h4>
        <br>
        </br>
        {` Date is ${newDate.toLocaleDateString()} . Time is ${newDate.toLocaleTimeString()} . Year is ${year}`} 
        </>
    );
  }

  export default DateTime;