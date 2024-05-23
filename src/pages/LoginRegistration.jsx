import React from 'react';
import './LoginRegistration.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginRegistration = () => {
 

  return (
 
    <div className='wrapper' >
      <div className="form-box">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icons' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icons' />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forget Password?</a>
          </div>
          <Link className='color' to={'/home'}><button type="submit">Login</button></Link>
          <div className="register-link">
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistration;