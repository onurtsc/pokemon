import { SET_POKEMONS } from '../actions/pokemonActions';

const initialState = {
    availablePokemons: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                availablePokemons: action.pokemons,
            }
    }
    return state;
}