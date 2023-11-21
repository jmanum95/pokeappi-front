import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/index";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Pages from "../Pages/Pages";
import Filters from "../Filters/Filters";
import Logo from "../Logo/Logo";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [, setRender] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const refreshFilter = (e) => {
    setRender(`re rendering ${e}`);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return allPokemons.length ? (
    <>
      <NavBar />
      <Filters refreshFilter={refreshFilter} />
      <Pages
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pages={pages}
      />
      <div className={styles.cards}>
        {currentPokemons.map((p) => {
          return (
            <Card
              name={p.name}
              img={p.img}
              type={p.type}
              id={p.id}
              attack={p.attack}
              defense={p.defense}
              sprite={p.sprite}
              key={p.id}
            />
          );
        })}
      </div>
      <Pages
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pages={pages}
      />
    </>
  ) : (
    <>
      <h1>Loading...</h1>
      <Logo />
    </>
  );
}
