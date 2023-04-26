// Use Function
import React from 'react';
import './App.css';

const fname = "Usman";
const lname ="Amjad";
const date = new Date().toLocaleString();

function Expressions(){
  
    return (
        <>
        <h1>Use Expressions My First Name {fname} and Last name {lname}</h1>
        <p>Lucky Number is {2+3} </p>
        <b>{Math.random()}</b>
        <h6>{date}</h6>
        </>
    );
}

export default Expressions;


// Use Class 
// import React from 'react';
// import './App.css';
 
// class App extends React.Component {
//   state={
//     curDT : new Date().toLocaleString(),
//   }
//   render(){
//     return (
//       <div className="App">
//         <p>Current Date And Time : {this.state.curDT}</p>
//       </div>
//     );
//   }
// }
 
// export default App;