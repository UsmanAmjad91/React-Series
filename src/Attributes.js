
import React from 'react';
import './App.css';
const img ="https://picsum.photos/500/600";
const img1 ="https://picsum.photos/300/400";
const img2 ="https://picsum.photos/400/500";
const linksmyweb ="https://chusmanamjad.com";

function Attributes(){
    return (
        <>
        <b>Attributes</b>
        <h1 contentEditable="true"> Usman Amjad</h1>
          <img  src='https://picsum.photos/200/300' alt='Random images'/>

          <img  src={img} alt='Random images'/>
          <img  src={img1} alt='Random images'/>
          <a href={linksmyweb} target='_blank'>
          <img  src={img2} alt='Random images'/>
          </a>
       </>
    );
}

export default Attributes;