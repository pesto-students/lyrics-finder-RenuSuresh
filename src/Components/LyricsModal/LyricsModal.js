import React, { useContext, useEffect, useState } from "react";
import "./LyricsModal.css";
import "bootstrap";
import "popper.js";
import { getLyrics } from "../../services/API/axios";
import logo from "../../assets/Dog-swimming.png";
import BeatLoader from "react-spinners/BeatLoader";
import ReactModal from "react-modal";

const ModalContext = React.createContext(null);

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
function Modal({ children }) {
  const ModalContent = useContext(ModalContext);

  const { artist, modalIsOpen, closeModal, image, album_title } = ModalContent;
  return (
    <>
      <ReactModal isOpen={modalIsOpen} style={customStyles}>
        <button type="button" className="modal__close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal__header">
          <img src={image} alt="album" />
          <span className="modal__artist__details">
            <h5>{album_title}</h5>
            <i className="album_icon"></i>
            <h6 className="modal-title">{artist}</h6>
          </span>
        </div>

        <hr className="modal__hr" />
        <div className="modal__content">
          <div className="modal-body">{children}</div>
        </div>
      </ReactModal>
    </>
  );
}

function LyricsModal({ artist, title, album_title, image, setArtistEmpty }) {
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setArtistEmpty();
    setModalIsOpen(false);
  };
  useEffect(() => {
    const artistTitle = `${artist}/${title}`;
    setModalIsOpen(true);
    setIsLoading(true);
    async function fetchLyrics() {
      const request = await getLyrics.get(artistTitle);
      setIsLoading(false);
      setLyrics(request.data);
      return request;
    }

    fetchLyrics();
  }, [artist, title]);

  return (
    <>
      <ModalContext.Provider
        value={{ artist, modalIsOpen, closeModal, image, album_title }}
      >
        {lyrics.lyrics && !isLoading ? (
          <Modal>
            <p>{lyrics.lyrics}</p>
          </Modal>
        ) : !lyrics.lyrics && !isLoading ? (
          <Modal>
            <img src={logo} className="modal__error" alt="error" />
            <p>Sorry no Lyrics Found!!!</p>
          </Modal>
        ) : (
          <Modal>
            <BeatLoader loading="true" />
          </Modal>
        )}
      </ModalContext.Provider>
    </>
  );
}

export default LyricsModal;
