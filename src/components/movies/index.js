import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementLikes, decrementLikes, supprimerMovie } from '../../actions/movies';

import './style.css';

const Movies = ({ movies }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            {movies.map(movie => (
                <div key={movie.id} className="col-md-4 div-containt">
                    <div className="card-content">
                        <div className="card-img">
                            <img src="https://placeimg.com/380/230/nature" alt="" />
                            <span><h4>{movie.category}</h4></span>
                        </div>

                        <div className="card-desc">
                            <h3>{movie.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas totam</p>
                            <a href="#" onClick={() => dispatch(supprimerMovie(movie.id))} className="btn-card">Supprimer</a>
                            <button className="button-increment" onClick={() => dispatch(incrementLikes(movie.id))}>
                                <i className="fas fa-thumbs-up pouce-up"></i>
                            </button>
                            <span className="nb-likes">{movie.likes}</span>
                            <button className="button-decrement" onClick={() => dispatch(decrementLikes(movie.id))}>
                                <i className="fas fa-thumbs-up pouce-down"></i>
                            </button>
                            <span className="nb-dislikes">{movie.dislikes}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movies;
