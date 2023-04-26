import React from 'react';
import './App.css';

const fname = "Usman";
const lname ="Amjad";

  function Literals(){
    return (
        <>
        <h1>{fname + " "  +lname}</h1>
        <b>Template Literals</b>
        <h1>{`${fname } ${lname}`}</h1>
        <p>Lucky Number is {Math.random()} </p>
        
        </>
    );
  }

  export default Literals;