import React from "react";
import "./Table.css";

function Table({ musicType }) {
  return (
    <div className="table__div">
      <p>{musicType}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renu</td>
            <td>Song</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
