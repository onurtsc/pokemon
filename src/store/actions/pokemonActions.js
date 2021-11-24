export const SET_POKEMONS = 'SET_POKEMONS';

export const fetchPokemons = () => {
    return async (dispatch) => {
        try {
            let transformedData = []
            for(let i = 1; i <= 35; i++) {
                const resData = await fetch(`https://pokeapi.co/api/v2/ability/${i}`)
                const res = await resData.json()
                transformedData.push(res)
            }
            dispatch({
                type: SET_POKEMONS,
                pokemons: transformedData,
            })
        } catch (err) {
            throw (err);
        }
    }
}