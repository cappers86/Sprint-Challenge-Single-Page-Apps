import React from "react";
import  {  Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
        
        <Link to="/">Home</Link>
        
        <Link to="/Characters">Card List</Link>
        
        <Link to="/Search">Search</Link>
        
      </nav>
    );
  }
  


