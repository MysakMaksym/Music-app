import "../styles/All.scss";
import SongCard from "./SongCard.js";
import SongInfo from "./SongInfo.js";
import React, { useState } from "react";

const songs = [
  { name: "Qwerty", artist: "Ytrewq Qwerty" },
  { name: "Qwerty", artist: "Ytrewq 0" },
  { name: "Qwerty", artist: "Ytrewq 1" },
  { name: "Qwerty", artist: "Ytrewq 2" },
  { name: "Qwerty", artist: "Ytrewq 3" },
  { name: "Qwerty", artist: "Ytrewq 4" },
];

function All() {
  const [activeSong, setActiveSong] = useState(null);

  return (
    <div className="All">
      <div className="songs">
        {songs.map((song) => (
          <SongCard song={song} setActiveSong={setActiveSong} />
        ))}
      </div>
      {activeSong && (
        <SongInfo song={activeSong} setActiveSong={setActiveSong} />
      )}
    </div>
  );
}

export default All;
