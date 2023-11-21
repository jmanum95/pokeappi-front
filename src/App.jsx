import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import Home from "./components/Home/Home";
import PokemonCreate from "./components/CreatePokemon/CreatePokemon";
import Pokedex from "./components/Pokedex/Pokedex";
import DetailedCard from "./components/DetailedCard/DetailedCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/create" element={<PokemonCreate />} />
          <Route path="/home/pokedex" element={<Pokedex />} />
          <Route path="/home/pokemons/:id" element={<DetailedCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
