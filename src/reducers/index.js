const initialState = {
    pokemons : [],
    pokemonsCopy : [],
    searchedpokemons: [],
    types: [],
    detail : [],
}

export default function rootReducer (state = initialState, action){

    switch(action.type){

        case "GET_ALL_POKEMONS": 
            return {
                ...state,
                pokemons : action.payload,
                pokemonsCopy : action.payload,
            }

        case "GET_TYPES":
            return {
                ...state,
                types : action.payload
            }

        case "FILTER_BY_TYPE":
            action.payload === "all" ? state.pokemons = state.pokemonsCopy 
            : state.pokemons = state.pokemonsCopy.filter(p => p.type.includes(action.payload))
            if (state.pokemons.length === 0){
                state.pokemons = state.pokemonsCopy
                alert("We couldn't find pokemons of that type")
            }
            return {
                ...state,
                pokemons : state.pokemons,
            }

            case "FILTER_BY_ATTRIBUTE":
                if (action.payload === "weight") state.pokemons = state.pokemons.sort((a,b) => b.weight - a.weight)
                else if (action.payload === "height") state.pokemons = state.pokemons.sort((a,b) => b.height - a.height)
                else if (action.payload === "attack") state.pokemons = state.pokemons.sort((a,b) => b.attack - a.attack)
                else if (action.payload === "defense") state.pokemons = state.pokemons.sort((a,b) => b.defense - a.defense)
                else if (action.payload === "speed") state.pokemons = state.pokemons.sort((a,b) => b.speed - a.speed)
                else if (action.payload === "hp") state.pokemons = state.pokemons.sort((a,b) => b.hp - a.hp)
                else if (action.payload === "no") state.pokemons = state.pokemons.sort((a,b) => a.id - b.id)
                return {
                    ...state,
                    pokemons : state.pokemons
                }

            case "SEARCH_POKEMONS":
                return {
                    ...state,
                    searchedpokemons : action.payload
                }

                case "GET_DETAIL":
                    return {
                        ...state,
                        detail: action.payload
                    }

                case "POST_DOG":
                    return {
                        ...state,
                    }
                case "RESET_DETAILS":
                    return {
                        ...state,
                        detail: []
                    }

        default: {
            return state
        }
    }
}