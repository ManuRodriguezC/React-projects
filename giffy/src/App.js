import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter"


export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/perritos/5'>Gifs de perritos</a>
        <a href='/gif/gatos/5'>Gifs de gaticos</a>
        <a href='/gif/carros/5'>Gifs de carros</a>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword/:numImg"
        />
      </section>
    </div>
  );
}

//<ListOfGifs keyword='pandas' numImg="5"/>

