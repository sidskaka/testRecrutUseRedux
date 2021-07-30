import { DISPLAY_MOVIES, INCREMENT_LIKES, DECREMENT_LIKES, SUPPRIMER_MOVIE } from '../actions/movies';

const initialState = {
    movies: []
}

export default (state = initialState, action) => {
    //console.log(action.payload)
    let newArray;
    switch (action.type) {
        case DISPLAY_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case INCREMENT_LIKES:
            console.log(state)
            newArray = [...state.movies]
            newArray[action.identifiant].likes = state.movies[action.identifiant].likes + 1
            //newArray[action.identifiant].likes = action.payload.likes + 1
            return {
                ...state,
                movies: newArray
            }
        case DECREMENT_LIKES:
            newArray = [...state.movies]
            newArray[action.identifiant].dislikes = state.movies[action.identifiant].dislikes - 1
            //newArray[action.identifiant].dislikes = action.payload.dislikes - 1
            return {
                ...state,
                movies: newArray
            }
        case SUPPRIMER_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}