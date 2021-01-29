import React, { useEffect, useState } from "react";
import "./LyricsModal.css";
import $ from "jquery";
import "bootstrap";
import "popper.js";
import { getLyrics } from "../axios";
import logo from "./../assets/Dog-swimming.png";

function Modal({ children, artist }) {
  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{artist}</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LyricsModal({ artist, title }) {
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const artistTitle = `${artist}/${title}`;
    async function fetchLyrics() {
      const request = await getLyrics.get(artistTitle);

      setLyrics(request.data);
      return request;
    }

    fetchLyrics();

    $(document).ready(function () {
      $("#myModal").modal("show");
    });
  }, [artist, title]);

  return (
    <>
      {lyrics.lyrics ? (
        <Modal artist={artist}>
          <p>{lyrics.lyrics}</p>
        </Modal>
      ) : (
        <Modal artist={artist}>
          <img src={logo} className="modal__error" />
        </Modal>
      )}
    </>
  );
}

export default LyricsModal;
