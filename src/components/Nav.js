import React from 'react';
import StyledNav from './StyledNav';
import  {  Link } from 'react-router-dom';

export default function Nav() {
    return (
        
        
        <StyledNav>
        <Link to="/">Home</Link>
        
        <Link to="/Characters">Card List</Link>
        
        <Link to="/Search">Search</Link>
        </StyledNav>
     
      
    );
  }
  


