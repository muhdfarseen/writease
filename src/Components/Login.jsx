import React from 'react'
import './Login.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div className='home'>


        <div className="container" >
        
            <img className='pic mb-5' src="images/Logo.svg" alt="" /> <br />

            <form>
            
                <h2 className='formhead mb-4'>Log in to WriteEase</h2>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input  type="email"
                            className="form-control"
                           
                    />

                </div>

                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input  type="password" 
                            className="form-control" 
                            
                    />

                </div>
                
                <div className="form-text">Not a member? 
                    <Link to="/signup">
                        <span className='clrch'>Sign Up</span>
                    </Link>
                </div>

                <Link to="/main">
                <button type="submit" className="btn btn-primary">Log In</button></Link>

            </form>

        </div>
        
    </div>
  )
}

export default Login