import React from "react";
import './home.css'
import Menubar from '../components/menubar.jsx';
import Postcard from "../components/postcard.jsx";
import Profile from "../components/profile.jsx";
import Catpic from "../components/pics/Cute Cat _ Cute Kitty.jpg";
import Prettyprincess from '../components/pics/prettyprincess.jpg';
import Scenary from '../components/pics/scenary.jpg';
import Panda from '../components/pics/panda.jpg';


function Home(){

return(
    <>
    {/*<div className='blur' style={{ marginTop:'30%' , right:'93%'}}></div>
    <div className='blur' style={{marginTop: '36%' , left: '80%'}}></div>
    <div className='blur' style={{marginTop: '5%' , left: '70%'}}></div>
    <div className='blur' style={{marginTop: '2%' , right: '77%'}}></div>*/}

 <Postcard profile={Prettyprincess} name='Pretty_Princess11' img={Scenary} caption="The nature excites the inside being"></Postcard>
    <Postcard profile={Catpic} name='Mundane' img={Catpic} caption='My lovely cat'></Postcard> 
    <Postcard></Postcard>

    
    <Menubar></Menubar>
    <div className="following">
        <h2>Following</h2>
        <Profile pfp={Prettyprincess} Name="Pretty_Princess11"></Profile>
        <Profile pfp={Panda} Name="Panda_it_is"></Profile>
        <Profile pfp={Catpic} Name="Mundane"></Profile>


    </div>
    
    
    </>
);
}
export default Home;