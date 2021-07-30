export const DISPLAY_MOVIES = 'DISPLAY_MOVIES';
export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const SUPPRIMER_MOVIE = 'SUPPRIMER_MOVIE';
export const DECREMENT_LIKES = 'DECREMENT_LIKES';

export const displayMovies = movies => ({
    type: DISPLAY_MOVIES,
    payload: movies
});

export const incrementLikes = id => ({
    type: INCREMENT_LIKES,
    identifiant: id-1
})

export const decrementLikes = id => ({
    type: DECREMENT_LIKES,
    identifiant: id-1
})

export const supprimerMovie = id => ({
    type: SUPPRIMER_MOVIE,
    payload: id
})

export const getMovies = () => dispatch => {
    fetch('./data/movies.js').then(response => {
        return response.json();
    }).then(movies => {
        dispatch(displayMovies(movies));
    });
};