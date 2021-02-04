import React, { useState } from "react";
import "./Home.css";
import { homeTiles } from "../properties";
import Table from "./Table";

function Home() {
  const [musicType, setMusicType] = useState("");
  const handleClick = (music) => {
    setMusicType(music.type);
  };
  const hideTable = () => {
    setMusicType("");
  };
  return (
    <div className="home">
      <div className="home__row">
        {homeTiles.map((music) => (
          <div
            className="home__card"
            onClick={() => handleClick(music)}
            key={music.id}
          >
            <img src={music.image} alt={music.type} />
            <label>{music.type}</label>
          </div>
        ))}
      </div>
      {musicType && <Table musicType={musicType} hideTable={hideTable} />}
    </div>
  );
}

export default Home;
