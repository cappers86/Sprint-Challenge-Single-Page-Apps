import React from "react";
import Header from "./components/Header.js";
import CardList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import  { Route} from 'react-router-dom';

export default function App() {
  return (
    <main>
      
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CardList} />
      <Route exact path='/Header' component={Header} />
      
    </main>
  );
}
