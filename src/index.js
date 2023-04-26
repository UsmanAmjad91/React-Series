import React from 'react';
import ReactDOM from 'react-dom/client';

// some time /client no use Example First Method
// import ReactDOM from 'react-dom';
// Second Method We Call
// var React = require('react');
// var ReactDOM = require('react-dom/client');

import './index.css';
import App from './App';
import Netflix from './Netflix';
import Expressions from './Expressions' ;
import reportWebVitals from './reportWebVitals';
import Literals from './Literals';
import DateTime from './DateTime';
import Attributes from './Attributes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <>
    {/* <App />
    <Netflix/> */}
    {/* <Expressions/> */}
    {/* <Literals/> */}
    {/* <DateTime/> */}
   <Attributes/>
    </>
 
  // </React.StrictMode>
);

// First Method
// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
// ,document.getElementById('root')
// );

// Second method
// ReactDOM.createRoot(document.getElementById('root')).render(<h1>Welcome First Page</h1>);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Pure Javascript in React
// var h1 = document.createElement('h1');
// h1.innerHTML="Welcome Pure Javascript In React";
// document.getElementById('root').append(h1);
// appendChild() Or append() 