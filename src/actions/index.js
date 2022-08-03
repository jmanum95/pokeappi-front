import axios from "axios";

export function getPokemons(){
    return async function(dispatch){
        var json = await axios.get("https://poke-appi.herokuapp.com/pokemons")
        return dispatch ({
            type: "GET_ALL_POKEMONS",
            payload: json.data
        })
    }
}

export function getTypes() {
    return async function (dispatch) {
        var json = await axios.get("https://poke-appi.herokuapp.com/types")
        return dispatch({
            type: "GET_TYPES",
            payload: json.data
        })
    }
}

export function filterByType(payload) {
    return {
        type: "FILTER_BY_TYPE",
        payload
    }
}

export function filterByAtributte(payload) {
    return {
        type: "FILTER_BY_ATTRIBUTE",
        payload
    }
}

export function searchPokemons (name) {
    return async function (dispatch) {
        var json = await axios.get("https://poke-appi.herokuapp.com/pokemons?name=" + name)
        if (json.data.length < 1) alert ("no poke found")
        return dispatch({
            type: "SEARCH_POKEMONS",
            payload: json.data
        })
    }
}

export function getDetail (id) {
    return async function (dispatch) {
        var json = await axios.get("https://poke-appi.herokuapp.com/pokemons/" + id)
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

    export function postPokemon(payload) {
        return async function (dispatch) {
            var json = await axios.post("https://poke-appi.herokuapp.com/pokemons", payload)
            return json
        }
    }

    export function resetDetails() {
        return {
            type: "RESET_DETAILS"
        }
    }