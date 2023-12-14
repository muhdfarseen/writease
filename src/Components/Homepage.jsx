import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Homepage.css';
import { Button, ButtonGroup,Stack } from '@chakra-ui/react'

function Homepage() {
  return (
    <div className="home">
      
      <div className="containerr">
        <div className="insidecontainer">

            <span className='wel'>Welcome to</span> <br /> 
            <img className='pic' src="images/Logo.svg" alt="" /> <br />
            <span className='wel'>Log in with your WriteEase account to continue </span> <br /> 


            <Stack spacing={3} direction='row' align='center'>
              
              <Link to="/login">
                <Button colorScheme='custom' size='md' bg='#10A37F' _hover={{ bg: '#0E7D62', color: 'white' }}>Log in</Button>
              </Link>

              <Link to="/signup">
                <Button colorScheme='custom' size='md' bg='#10A37F' _hover={{ bg: '#0E7D62', color: 'white' }}>Sign up</Button>
              </Link>

            </Stack>

        </div>
      </div>
    </div>
  )
}

export default Homepage