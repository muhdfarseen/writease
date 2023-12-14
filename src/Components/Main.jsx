import React, { useState, useEffect } from 'react';
import './Main.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';





const configuration = new Configuration({
  organization: "org-BRyklWzfG6RjGzny3sJCIyoP",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function Main() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Your AI-powered writing companion. Get personalized assistance, instant feedback, and access to a vast knowledge base to ace your assignments. Say goodbye to writer's block and hello to academic success!
    </Tooltip>
  );

  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userInput },
          ],
          model: 'gpt-3.5-turbo', // Use GPT-3.5-Turbo as the model
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Replace with your actual API key
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      setChatHistory([...chatHistory, { role: 'bot', content: botReply }]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
      console.log('Response:', error.response.data); // Log the response data
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const fetchEngines = async () => {
      try {
        const engines = await openai.listEngines();
        console.log(engines);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEngines();
  }, []);

  
 
  return (

    
    
    
    <div className="home">

    


      <div className="mobileleft">

      <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  
            <img type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" src="/images/tooglebtn.svg"  alt="" />
            <img src="/images/Logo.svg" width="120px" alt="" />


            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div className="offcanvas-header">
                
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
              <div>
          <img src="/images/Logo.svg" width="130px" alt="" />
          <p className='para'>WriteEase is a user-friendly and comprehensive application designed to assist students in effectively managing and completing their assignments. With WriteEase, the process of writing assignments becomes more streamlined and efficient, allowing students to focus on producing high-quality work.
            <br /><br />We kindly request your valuable feedback. Your insights and suggestions will help us enhance the app's features and ensure it caters to your needs.
          </p>
        </div>

        <div className='icongrp'>
          
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >

          <div variant="success" className='iconalon' >
            <img className='iconimg' src="/images/aboutus.svg" alt="" />
            <h1 className='icontxt'>About us</h1>
          </div>

    </OverlayTrigger>


          <Link to="/">
            <div className='iconalon'>
              <img className='iconimg' src="/images/SignOut.svg" alt="" />
              <h1 className='icontxt'>Log out</h1>
            </div>
          </Link>
        </div>
              </div>
            </div>
      </nav>

      </div>

      <div className="leftsection">
        <div>
          <img src="/images/Logo.svg" width="165px" alt="" />
          <p className='para'>WriteEase is a user-friendly and comprehensive application designed to assist students in effectively managing and completing their assignments. With WriteEase, the process of writing assignments becomes more streamlined and efficient, allowing students to focus on producing high-quality work.
            <br /><br />We kindly request your valuable feedback. Your insights and suggestions will help us enhance the app's features and ensure it caters to your needs.
          </p>
        </div>

        <div className='icongrp'>
          
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >

          <div variant="success" className='iconalon' >
            <img className='iconimg' src="/images/aboutus.svg" alt="" />
            <h1 className='icontxt'>About us</h1>
          </div>

    </OverlayTrigger>


          <Link to="/">
            <div className='iconalon' >
              <img className='iconimg' src="/images/SignOut.svg" alt="" />
              <h1 className='icontxt'>Log out</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="rightsection">
        <div className='playarea'>
          <form>
            <div className='promptsrc'>
              <textarea
                className="form-control txtar"
                placeholder="Send your questions here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                Submit
              </button>
            </div>

            <div className="solution">
              {chatHistory.map((message, index) => (
                <div key={index} className={`message ${message.role}`} style={{ color: '#ffffff9c'}}>
                  {message.content}
                </div>
              ))}
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
