import React from 'react';
import './style.css';

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="nav-pagination">
            <ul className="ul-pagination">
                {pageNumbers.map(number => (
                    <li className="li-pagination" key={number}>
                        <a className="a-pagination" onClick={() => paginate(number)} href='/#'>
                            - {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;