import React from "react";
import '../App.css';
import Pic from "../components/pics/panda.jpg"

function Profile() {
    return (


<div className="profile">
      <div className="profile__header">
        <img src={Pic} alt="" style={{width:60,hieght:70}}
          className="profile__header__image"
        />
        
        <div className='blur' style={{ marginTop:'10%' , right:'80%'}}></div>
    
    
        <div className="profile__header__info">
          <h1>Musabbiha</h1>
          <button>Edit profile</button>
        </div>
      </div>
      <div className="profile__bio">
        <p>Janlewa hamla kiya aur gypsy lekr bhag gya</p>
      </div>
      <div className="profile__stats">
        <div className="stat">
          <i className="fsociable"></i>
          <p>Posts</p>
          <span>0</span>
        </div>
        <div className="stat">
          <i className="fas fa-reply"></i>
          <p>Replies</p>
          <span>0</span>
        </div>
        <div className="stat">
          <i className="fas fa-retweet"></i>
          <p>Reposts</p>
          <span>0</span>
        </div>
      </div>
      <div className="profile__threads">
        <p>Make your first post here!</p>
      </div>
      
     </div>
    
    );
};


export default Profile;