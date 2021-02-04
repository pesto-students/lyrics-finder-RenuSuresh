import React, { useEffect, useState } from "react";
import "./Table.css";
import { getSuggest } from "../axios";
import LyricsModal from "./LyricsModal";
import Pagination from "./Pagination";
import BeatLoader from "react-spinners/BeatLoader";

function TableData({ currentGenre, getLyrics }) {
  return (
    <table>
      <tbody>
        {currentGenre.map((Element) => (
          <tr
            key={Element.id}
            onClick={() =>
              getLyrics(
                Element.artist.name,
                Element.title,
                Element.album.title,
                Element.artist.picture_medium
              )
            }
          >
            <td className="table__img__col">
              <img src={Element.album.cover_small} alt="album" />
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
  const [image, setImage] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");

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
  console.log("genre>>>", genre);
  const getLyrics = (artist, title, album_title, image) => {
    setTitle(title);
    setArtist(artist);
    setImage(image);
    setAlbumTitle(album_title);
    console.log("albumtitle>>>>", album_title);
  };

  return (
    <div className="table__div">
      <div className="table__div__border">
        <button type="button" className="close" onClick={hideTable}>
          &times;
        </button>
        <div className="table__caption">
          <p>{musicType}</p>
        </div>

        <div className="table__table">
          {loading ? (
            <BeatLoader loading={loading} color={"#ffffff"} />
          ) : (
            <TableData currentGenre={currentGenre} getLyrics={getLyrics} />
          )}
        </div>
        <Pagination
          genrePerPage={genrePerPage}
          totalGenre={genre.length}
          paginate={paginate}
        />
        {artist && (
          <LyricsModal
            artist={artist}
            title={title}
            image={image}
            album_title={albumTitle}
          />
        )}
      </div>
    </div>
  );
}

export default Table;
