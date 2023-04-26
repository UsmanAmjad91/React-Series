import React from 'react';
import './App.css';

function App() {
  return (
 <> 
   <h1>Welcome</h1>
   <p>My New Series</p>
   <a href="https://google.com" className="anchorGoogle">Goolge</a>
   </>
  );
}
// First A Method

// function App() {
//   return (
//  <React.Fragment> 
//    <h1>Welcome</h1>
//    <p>My New Series</p>
//    <a href="https://google.com" className="anchorGoogle">Goolge</a>
//    </React.Fragment>
//   );
// }
// First B Method

// function App() {
//   return (
//  <div> 
//    <h1>Welcome</h1>
//    <p>My New Series</p>
//    <a href="https://google.com" className="anchorGoogle">Goolge</a>
//    </div>
//   );
// }

// //  Second Method 

// function AppSecond() {
//   return (
// [
//   <h6>Second Method Show</h6>,
//   <h1>Welcome</h1>,
//   <p>My New Series</p>,
//   <a href="https://google.com" className="anchorGoogle">Goolge</a>,
// ]
//   );
// }

export default App ;
// export default (App, AppSecond);