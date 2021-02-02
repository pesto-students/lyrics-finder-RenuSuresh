import React, { useEffect, useState } from "react";
import "./LyricsModal.css";
import "bootstrap";
import "popper.js";
import { getLyrics } from "../axios";
import logo from "./../assets/Dog-swimming.png";
import BeatLoader from "react-spinners/BeatLoader";
import Modal from "react-modal";

function OpenModal({
  modalIsOpen,
  children,
  artist,
  closeModal,
  image,
  album_title,
}) {
  return (
    <>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="modal__header">
          <img src={image} alt="album" />
          <h5>{album_title}</h5>

          <i className=" fa-compact-dics"></i>
          <i className="fa fa-search"></i>
          <i className="album_icon"></i>

          <h6 className="modal-title">{artist}</h6>
        </div>
        <button type="button" className="modal__close" onClick={closeModal}>
          &times;
        </button>
        <hr className="modal__hr" />
      </Modal>
    </>
  );
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "820px",
  },
};

function LyricsModal({ artist, title, album_title, image }) {
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    const artistTitle = `${artist}/${title}`;
    setModalIsOpen(true);
    <BeatLoader loading="true" />;
    async function fetchLyrics() {
      const request = await getLyrics.get(artistTitle);
      setLyrics(request.data);
      <BeatLoader loading="false" />;

      return request;
    }

    fetchLyrics();
  }, [artist, title]);

  return (
    <>
      <div>{album_title}</div>
      {lyrics.lyrics ? (
        <OpenModal
          artist={artist}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={image}
          ariaHideApp={false}
          album_title={album_title}
        >
          <p>{lyrics.lyrics}</p>
        </OpenModal>
      ) : (
        <OpenModal
          artist={artist}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={image}
          ariaHideApp={false}
          album_title={album_title}
        >
          <img src={logo} className="modal__error" alt="error" />
          <p>Sorry no Lyrics Found!!!</p>
        </OpenModal>
      )}
    </>
  );
}

export default LyricsModal;
