import React from "react";
import { useSelector} from "react-redux";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card";
import styles from "./Pokedex.module.css"

export default function Pokedex() { 

    const searchedpokemons = useSelector((state) => state.searchedpokemons)

    return (
        <div>
            <NavBar/>
            <SearchBar/>
            <div className={styles.cards}>
                {
                    searchedpokemons.map(p => {
                        return (
                            <Card name={p.name} img={p.img} type={p.type} id={p.id} attack={p.attack} defense={p.defense} sprite={p.sprite} key={p.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}