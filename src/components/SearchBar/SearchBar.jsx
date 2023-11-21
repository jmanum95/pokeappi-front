import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../redux/actions/index";
import styles from "./SearchBar.module.css"


export default function SearchBar (){
    const dispatch= useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e){
        if(!name) {
            alert("Please enter a pokemon name")
        }
        else {
            dispatch(searchPokemons(name))
        }
        setName("")
    }

    return (
        <div className={styles.searchbar}>
            <input
            type = "text"
            placeholder="Search Pokemon..."
            spellCheck="false"
            value={name}
            onChange={(e) => handleInputChange(e)}
            onKeyPress={(e) => {if (e.key === "Enter") handleSubmit(e)}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>GO!</button>
        </div>
    )

}