import React from "react";
import './postcard.css';
import Like from './pics/heart (2).png';
//import Catpic from './pics/Cute Cat _ Cute Kitty.jpg';
import { useState } from "react";

function Postcard(props){
    
    const [likes,setlikes]=useState(false);
    const nooflikes=()=>{
        setlikes(likes+1)}
        
        
return(

    <div className="postcard">
        <div className="ppf"><img className="profile" src={props.profile}></img><p className="name">{props.name}</p></div>
         <div ><img className='posting'  src={props.img}></img></div>
         <div className="likebutton"><button ><img className='heart' onClick={nooflikes} src={Like} alt=''></img><p className="number">{likes}</p></button></div>
        
         <p style={{fontSize:'15px', marginTop:"0px"}}>Caption: {props.caption}</p>
    </div>
    
    
);





}
export default Postcard;
