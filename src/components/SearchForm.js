import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";
import StyledSearch from "./StyledSearch";



const SearchForm = (props) => {

  const[currentForm, changeForm] = useState('');
  const[searchResult, submitResult] = useState([]);

useEffect (() => {

  axios.get('https://rickandmortyapi.com/api/character/')
      .then(responce => {
      console.log(responce.data.results);
      const characters = responce.data.results;
      const results =characters.filter(character => {
          return character.name.toLowerCase().includes(currentForm.toLowerCase());
      })

              submitResult(results);
      })

      .catch(error => {
          console.log(error);
      })
                
     

  }, [currentForm])

  const onFormChange = event => {
      changeForm(event.target.value)
      console.log(currentForm)
  }

  return (
      
      <form className = "search-form">
          
         <StyledSearch>
          <input
              type='text'
              placeholder='search'
              onChange={onFormChange}
          />
            </StyledSearch>
          {
              searchResult.map((people, index) => {
                  return(
                      <CharacterCard key={index} people={people}/>
                  )
              })
          }

          
      </form>
      
  );
}

export default SearchForm;
