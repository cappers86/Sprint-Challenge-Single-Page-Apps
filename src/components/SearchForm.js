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
    })
  })


  return (
    <section className="search-form">
     
    </section>
  );
}

export default SearchForm;
