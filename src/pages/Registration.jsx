import React from 'react';
import './LoginRegistration.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Registration = () => {


  return (
    <div className={'wrapper'}>
      <div className="form-box Register">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icons' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Email' required />
            <FaEnvelope className='icons' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icons' />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" /> I agree to the terms and Conditions</label>
            <a href="#"></a>
          </div>
          <Link to={'/home'}><button type="submit">Register</button></Link>
          <div className="register-link">
            <p>Already have an account? <Link to={'/'}>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;