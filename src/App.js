import React from "react";
import Header from "./components/Header.js";
import CardList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

import  { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>link</li>
        </ul>
      </nav>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CardList} />
      <Route exact path='/Search' component={SearchForm} />
      <Route exact path='/Header' component={Header} />
      
    </main>
  );
}
