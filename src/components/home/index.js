import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/movies';
import Pagination from '../../pagination';
import Movies from '../movies';

import './style.css';

const Home = () => {
    const data = {
        HonorTitle: ""
    }
    const [entryData, setEntryData] = useState(data);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(6);

    const indexOfLastPost = currentPage * moviesPerPage;
    const indexOfFirstPost = indexOfLastPost - moviesPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    useEffect(() => {
        dispatch(getMovies())
        //console.log(dispatch(getMovies()))
    }, []);

    const handleChange = e => {
        setEntryData({
            ...entryData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(entryData);
        setMoviesPerPage(entryData.HonorTitle);
    }

    const {HonorTitle} = entryData;

    return (
        <section className="details-card">
            <div className="container">
                <form onSubmit={ handleSubmit }>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01" onChange={ handleChange } defaultValue={ HonorTitle } id="HonorTitle" defaultValue={ HonorTitle }>
                            <option value="DEFAULT" disabled>Choose...</option>
                            <option value="6">6</option>
                            <option value="3">3</option>
                        </select>
                        <button>appliquer</button>
                    </div>
                </form>
                <Movies movies={currentPosts} />
                <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
            </div>
        </section>
    )
}

export default Home;
