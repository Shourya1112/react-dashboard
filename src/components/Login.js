import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appleLogo from "../assets/icons/apple.svg";
import googleLogo from "../assets/icons/google.svg";
import showIcon from "../assets/icons/show.png";
import hideIcon from "../assets/icons/hide.png";
import "../styles/Login.css"

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform your form submission logic here

    // Redirect to the "/" route
    navigate("/");
  };


  return (
    <div className="login">
            <div className="hero">
                <h1 className="hero--text">Board.</h1>
            </div>
            <div className="main">
                <div className="sign">
                    <h2 className="log--heading">Sign In</h2>
                    <h4 className="log--text">sign in to your account</h4>
                    <div className="sign--option">
                        <button className="sign--option--btn" >
                        <img
                            src={ googleLogo }
                            alt="google icon"
                            className="btn--icon"
                        />
                        <p className="btn--txt">Sign in with Google</p>
                        </button>
                        <button className="sign--option--btn">
                        <img 
                            src={ appleLogo } 
                            alt="apple icon" 
                            className="btn--icon"
                        />
                        <p className="btn--txt">Sign in with Apple</p>
                        </button>
                    </div>
                    <div className="sign--form">
                        <form onSubmit={handleSubmit}>
                            <h3 className="form--label">Email address</h3>
                            <input 
                                className="input" 
                                type="email" 
                                name="Email" 
                                placeholder="Your Email Id"
                                required
                            />
                            <h3 className="form--label">Password</h3>
                            <input 
                                className="password--input" 
                                type={ show? "text" : "password" } 
                                name="Password" 
                                placeholder="Your Password" 
                                required
                            />
                            <img 
                                src={show? hideIcon : showIcon } 
                                onClick={handleShow} 
                                className="eyecon"
                            />
                            <p className="forgot">Forgot password?</p>
                            <input 
                                className="input--btn" 
                                type="submit" 
                                value="Sign In" 
                            />
                        </form>
                    </div>
                    <div className="sign--up">
                        <p className="no--account">Don't have an account?</p>
                        <p className="register">Register here</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Login;
