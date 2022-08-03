import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import landingPage from  "./components/landingPage/landingPage"
import Home from "./components/Home/Home"
import Pokedex from './components/Pokedex/Pokedex';
import { PokemonCreate } from './components/CreatePokemon/CreatePokemon';
import DetailedCard from './components/DetailedCard/DetailedCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path = '/' component={landingPage}/>
            <Route exact path = '/home' component= {Home}/>
            <Route exact path = '/home/create' component= {PokemonCreate}/>
            <Route exact path = '/home/pokedex' component= {Pokedex}/>
            <Route exact path = '/home/pokemons/:id' component={DetailedCard}/>
          </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
