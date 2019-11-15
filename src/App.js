import React from "react";
import Header from "./components/Header.js";
import CardList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import  { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Nav />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CardList} />
      <Route exact path='/Search' component={SearchForm} />
      <Route exact path='/Header' component={Header} />
      
    </main>
  );
}
