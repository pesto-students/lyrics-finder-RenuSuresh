import React from "react";

function Pagination({ genrePerPage, totalGenre, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalGenre / genrePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
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
