import React from "react";
import StyledCard from './StyledCard';


const CharacterCard = (props)  => {


  return (
    
    <StyledCard>
    <h1>{props.people.name}</h1>
  <h2>gender:{props.people.gender}</h2>
 
      </StyledCard>
  );
}

export default CharacterCard;
