import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";


const SearchForm = (props) => {
  
  const [form, changeForm] = useState('');
  const [result, submitResult] = useEffect ([]);


  useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then (responce => {
      console.log(responce.data.results);
      const characters = responce.data.results;
      const results = characters.filter(character  =>   {
        return character.name.toLowerCase().includes(currentForm.toLowerCase());
      
    })

        submitResults(results);

    })

    .catch(error => {
      console.log(error);
    })

  }, [form])

  return (
    <section className="search-form">
     
    </section>
  );
}

export default SearchForm;
