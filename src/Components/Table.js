import React, { useEffect, useState } from "react";
import "./Table.css";
import { instance } from "../axios";
import LyricsModal from "./LyricsModal";
import Pagination from "./Pagination";

function Table({ musicType }) {
  const [genre, setGenre] = useState([]);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [genrePerPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(musicType);
      setGenre(request.data.data);
      return request;
    }
    fetchData();
  }, [musicType]);
  console.log("genre>>>>", genre[0]);

  const getLyrics = (artist, title) => {
    setTitle(title);
    setArtist(artist);
  };

  // get current data
  const indexOfLastGenre = currentPage * genrePerPage;
  const indexOfFirstGenre = indexOfLastGenre - genrePerPage;
  const currentPost = genre.slice(indexOfFirstGenre, indexOfLastGenre);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentPost.map((Element) => (
            <tr
              key={Element.id}
              onClick={() => getLyrics(Element.artist.name, Element.title)}
            >
              <td>
                <img src={Element.album.cover_small} />
              </td>
              <td>{Element.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
