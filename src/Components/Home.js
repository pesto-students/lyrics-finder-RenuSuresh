import React, { useState } from "react";
import "./Home.css";
import { homeTiles } from "../properties";
import Table from "./Table";

function Home() {
  const [musicType, setMusicType] = useState("");
  const handleClick = (music) => {
    console.log("music type is >>>>", music);
    setMusicType(music.type);
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
            <h1>{music.type}</h1>
          </div>
        ))}
      </div>
      {musicType && <Table musicType={musicType} />}
    </div>
  );
}

export default Home;
