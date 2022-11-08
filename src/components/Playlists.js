import "../styles/Playlists.scss";
import { ReactComponent as Playlist } from "../icons/playlist.svg";
import { ReactComponent as Dropdown } from "../icons/dropdown.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";
import React, { useState } from "react";
import { ReactComponent as DropdownUp } from "../icons/dropdown-up.svg";

function Playlists() {
  const [isOpen, setIsOpen] = useState(true);

  const dropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Playlists">
      <div className="header">
        <div onClick={dropdown}>
          <span className="name">Playlists</span>
          {isOpen ? <Dropdown className="dropdown" /> : <DropdownUp />}
        </div>
        <Plus className="plus" />
      </div>
      {isOpen && (
        <ul className="playlist">
          <li className="playlist-link">
            <Playlist />
            <span className="playlist-link-name">Playlist 1</span>
          </li>
          <li className="playlist-link">
            <Playlist />
            <span className="playlist-link-name">Playlist 2</span>
          </li>
          <li className="playlist-link">
            <Playlist />
            <span className="playlist-link-name">Playlist 3</span>
          </li>
          <li className="playlist-link">
            <Playlist />
            <span className="playlist-link-name">Playlist 4</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Playlists;
