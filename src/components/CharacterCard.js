import React from "react";
import StyledCard from './StyledCard';


const CharacterCard = (props)  => {


  return (
    
    <StyledCard>
    <h1>{props.people.name}</h1>
  <h2>gender:{props.people.gender}</h2>
  <h2>species:{props.people.species}</h2>
  <h2>status:{props.people.status}</h2>
  <img src={`${props.people.image}`} alt=""/>
      </StyledCard>
  );
}

export default CharacterCard;
