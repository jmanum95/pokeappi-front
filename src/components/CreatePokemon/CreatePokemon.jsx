import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemons, postPokemon } from "../../actions/index";
import NavBar from "../NavBar/NavBar"
import styles from "./CreatePokemon.module.css"

function validate (input, nameList) {
    let errors = {}
    if(!input.name) {
        errors.name = "Name is required"
    }
    else if (nameList.includes(input.name)) {
        errors.name = "Name already exists"
    }
    else if (!input.attack) {
        errors.attack = "Attack is required"
    }
    else if (input.attack < 1 || input.attack > 100) {
        errors.attack = "Attack points must be between 1 and 100"
    }
    else if (!input.defense) {
        errors.defense = "Defense is required"
    }
    else if (input.defense < 1 || input.defense > 100) {
        errors.defense = "Defense points must be between 1 and 100"
    }
    else if (!input.hp) {
        errors.hp = "HP is required"
    }
    else if (input.hp < 1 || input.hp > 100) {
        errors.hp = "HP points must be between 1 and 100"
    }
    else if (!input.speed) {
        errors.speed = "Speed is required"
    }
    else if (input.speed < 1 || input.speed > 100) {
        errors.speed = "Speed points must be between 1 and 100"
    }
    else if (!input.weight) {
        errors.weight = "Weight is required"
    }
    else if (input.weight < 1 || input.weight > 10000) {
        errors.weight = "Weight must be between 1 and 10000"
    }
    else if (!input.height) {
        errors.height = "Height is required"
    }
    else if (input.attack < 1 || input.attack > 10000) {
        errors.height = "Height must be between 1 and 10000"
    }
    return errors
}

export function PokemonCreate () {

    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.types)
    const allPokemons = useSelector((state) => state.pokemons)
    const [errors, setErrors] = useState({})
    const [nameList, setNameList] = useState([])

    const [input, setInput] = useState({
        name : "",
        img : "",
        attack : "",
        defense : "",
        hp : "",
        speed : "",
        weight : "",
        height : "",
        type : [],
    })

    function existentName () {
        setNameList(allPokemons.map(d => d.name))
    }

    function handleChange(e) {
        setInput({
             ...input,
             [e.target.name] : e.target.value
        })
        existentName()
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
           }, nameList))
     }

     function handleSelect(e){
        let repeatedTypes = input.type.find(t => t === e.target.value)
        let justThreeTypes = input.type.length
        if (repeatedTypes){
            setInput({
                ...input
            })
        }
        else if (justThreeTypes > 1){
            setInput({
                ...input
            })
        }
        else {
            setInput({
                ...input,
                type: [...input.type, e.target.value]
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        input.name = input.name.toLowerCase()
        dispatch(postPokemon(input))
        alert("Pokemon created succesfully")
        setInput({
            name : "",
            img : "",
            attack : "",
            defense : "",
            hp : "",
            speed : "",
            weight : "",
            height : "",
            type : [],
        })
    }

    function handleDelete(e){
        setInput({
            ...input,
            type: input.type.filter(t => t !== e)
        })
        setErrors(validate({
            ...input,
           }, nameList))
    }

    useEffect(() => {
        dispatch(getTypes())
        dispatch(getPokemons())
    }, [dispatch])

    return (
        <div>
        <NavBar/>
        <div className={styles.form}>
            <h1>Create your Pokemon</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name : </label>
                    <input
                    type="text"
                    autoComplete="off"
                    value= {input.name}
                    name="name"
                    placeholder="Name..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Image (must be a url): </label>
                    <input
                    type="text"
                    value= {input.img}
                    name="img"
                    placeholder="Image..."
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Attack : </label>
                    <input
                    type="number"
                    value= {input.attack}
                    name="attack"
                    placeholder="Attack..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.attack && (
                        <p>{errors.attack}</p>
                    )}
                </div>
                <div>
                    <label>Defense : </label>
                    <input
                    type="number"
                    value= {input.defense}
                    name="defense"
                    placeholder="Defense..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.defense && (
                        <p>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label>HP : </label>
                    <input
                    type="number"
                    value= {input.hp}
                    name="hp"
                    placeholder="HP..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.hp && (
                        <p>{errors.hp}</p>
                    )}
                </div>
                <div>
                    <label>Speed : </label>
                    <input
                    type="number"
                    value= {input.speed}
                    name="speed"
                    placeholder="Speed..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.speed && (
                        <p>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label>Weight : </label>
                    <input
                    type="number"
                    value= {input.weight}
                    name="weight"
                    placeholder="Weight..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.weight && (
                        <p>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label>Height : </label>
                    <input
                    type="number"
                    value= {input.height}
                    name="height"
                    placeholder="Height..."
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label>Types (click to erase) : </label>
                    <select onChange={(e) => handleSelect(e)}>
                        {allTypes.map((t) => (
                            <option key={t.name} value={t.name}>{t.name}</option>
                        ))}
                    </select>
                    <br></br>
                    {input.type.map(t => 
                            <span key={t} className={styles.types} onClick={() => handleDelete(t)}>{t.toUpperCase()}</span>

                    )}
                </div>
                <div>
                    <button type="submit" disabled = {Object.keys(errors).length || !input.name || !input.type.length}
                     className={Object.keys(errors).length || !input.name || !input.type.length ? styles.button_disabled : styles.button_enabled}>Create Pokemon</button>
                </div>
            </form>
        </div>
        </div>
    )

}