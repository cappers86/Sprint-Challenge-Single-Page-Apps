import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';


 function CharacterList() {
  
  const [people, fetchPeople] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
              .then(responce => {
                  console.log(responce.data.results);
                  fetchPeople(responce.data.results);
              })
              .catch(error => {
                  console.log(error);
              })
  }, []);

  return (
    <section className="character-list">
      {
             people.map((people, index) => {
                 return(
                     <CharacterCard key={index} people={people}/>
                 )
             })
         }
            );
    }
    </section>
  );
}

export default CharacterList;