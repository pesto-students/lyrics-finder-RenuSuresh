import React, { useEffect, useState } from "react";
import "./LyricsModal.css";
import $ from "jquery";
import "bootstrap";
import "popper.js";
import { lyricsInstance } from "../axios";
import axios from "axios";

function LyricsModal({ artist, title }) {
  const [lyrics, setLyrics] = useState("");
  useEffect(() => {
    const artistTitle = `${artist}/${title}`;
    async function fetchLyrics() {
      const request = await lyricsInstance.get(artistTitle);
      setLyrics(request.data);
      return request;
    }
    fetchLyrics();
    $(document).ready(function () {
      $("#myModal").modal("show");
    });
  }, [artist, title]);
  console.log("lyrics>>>>", lyrics);
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
          <div className="modal-body">
            <p>{lyrics.lyrics}</p>
          </div>
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

export default LyricsModal;
