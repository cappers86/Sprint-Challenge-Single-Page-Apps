import React from "react";
import Header from "./components/Header.js";
import CardList from './components/CharacterList';
import  { Route} from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Route exact path='/' component={CardList} />
      <Header />
    </main>
  );
}
