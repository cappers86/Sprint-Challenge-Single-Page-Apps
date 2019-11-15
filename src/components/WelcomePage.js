import React from "react";
import StyledWelcome from './StyledWelcome';

export default function WelcomePage() {
  return (
    
     
        <StyledWelcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </StyledWelcome>
      
      
    
  );
}
