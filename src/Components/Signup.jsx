import React from 'react'
import './Login.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Signup() {
  return (
    <div className='home'>


        <div className="container" >
        
            <img className='pic mb-5' src="images/Logo.svg" alt="" /> <br />

            <form>
            
                <h2 className='formhead mb-4'>Sign up to WriteEase</h2>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input  type="text"
                            className="form-control"
                           
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input  type="email"
                            className="form-control"
                            
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Create Password</label>
                    <input  type="password" 
                            className="form-control" 
                            
                    />
                </div>
                
                <div className="form-text">Not a member?
                    <Link to="/login">
                        <span className='clrch'>Sign In</span>
                    </Link>
                </div>
                
                <Link to="/main">
                <button type="submit" className="btn btn-primary">Create Account</button></Link>

            </form>

        </div>
        
    </div>
  )
}

export default Signup