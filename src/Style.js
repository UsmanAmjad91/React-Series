import React from "react";
import "./App.css";
const img = "https://picsum.photos/300/400";
  const headerstyle = {
    color:'rgb(98, 60, 254)',
    'font-family':"'Dancing Script', cursive",
    'text-align':'center',
  }
function Style() {
  return (
    <>
      <h2 className="headingPage">Style Sheet React with Css</h2>
      <h1 id="myimg">
        <img src={img} alt="Random images" />
        <br></br>
        <img src="https://picsum.photos/301/400" alt="Random images" />
        <img src="https://picsum.photos/299/400" alt="Random images" />
      </h1>
      <h1 id="myname"> Usman Amjad </h1>
      <h4 id="rs">This Is Style React</h4>
      <br></br>
        <p className="paragrahs" style={{'color':'rgb(8, 226, 255)','text-align':'center','font-family': "'Bruno Ace SC', cursive",'font-weight':'bold'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      <h1 style={headerstyle} > Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</h1>
    </>
  );
}

export default Style;
