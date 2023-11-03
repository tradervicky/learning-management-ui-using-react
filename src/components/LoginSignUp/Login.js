import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className="maincontainer">
    <div className="wrapper">
      <div className="content-container">
        <div className="form-container">
          <div className="title-text">
            <div className={`title ${isLogin ? 'login' : 'signup'}`}>
              {isLogin ? 'Login Form' : 'Signup Form'}
            </div>
          </div>
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={isLogin} onChange={toggleForm} />
            <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={toggleForm} />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className={isLogin ? 'login' : 'signup'}>
              {isLogin ? (
                <div>
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="">Signup now</a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="field">
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Confirm Password" required />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="image-container">
         {isLogin ? (
            <img src="/images/Login.jpg" alt="Login Image" />
          ) : (
            <img src="/images/register.jpg" alt="Signup Image" />
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
