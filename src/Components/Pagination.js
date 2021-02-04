import React from "react";
import "./Pagination.css";

const getPageNumber = (genrePerPage, totalGenre) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalGenre / genrePerPage); i++) {
    pageNumber.push(i);
  }
  return pageNumber;
};

function Pagination({ genrePerPage, totalGenre, paginate }) {
  const pageNumber = getPageNumber(genrePerPage, totalGenre);

  return (
    <nav className="pagination__nav">
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
