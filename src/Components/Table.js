import React, { useEffect, useState } from "react";
import "./Table.css";
import { getSuggest } from "../axios";
import LyricsModal from "./LyricsModal";
import Pagination from "./Pagination";
import BeatLoader from "react-spinners/BeatLoader";

function TableData({ currentGenre, getLyrics }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        {currentGenre.map((Element) => (
          <tr
            key={Element.id}
            onClick={() => getLyrics(Element.artist.name, Element.title)}
          >
            <td>
              <img src={Element.album.cover_small} />
            </td>
            <td className="table__info">
              <span className="table__album">{Element.album.title}</span>
              <span className="table__title">{Element.title}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Table({ musicType, hideTable }) {
  const [genre, setGenre] = useState([]);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [genrePerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  // get current data
  const indexOfLastGenre = currentPage * genrePerPage;
  const indexOfFirstGenre = indexOfLastGenre - genrePerPage;
  const currentGenre = genre.slice(indexOfFirstGenre, indexOfLastGenre);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function fetchData() {
      const request = await getSuggest.get(musicType);

      setGenre(request.data.data);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [musicType]);

  const getLyrics = (artist, title) => {
    setTitle(title);
    setArtist(artist);
  };

  return (
    <div className="table__div">
      <button type="button" className="close" onClick={hideTable}>
        &times;
      </button>
      <p>{musicType}</p>

      <div className="table__table">
        {loading ? (
          <BeatLoader loading={loading} />
        ) : (
          <TableData currentGenre={currentGenre} getLyrics={getLyrics} />
        )}
      </div>
      <Pagination
        genrePerPage={genrePerPage}
        totalGenre={genre.length}
        paginate={paginate}
      />
      {artist && <LyricsModal artist={artist} title={title} />}
    </div>
  );
}

export default Table;
