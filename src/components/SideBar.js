import "../styles/SideBar.scss";
import UserProfile from "./UserProfile";
import Playlists from "./Playlists";
import { ReactComponent as Music } from "../icons/music.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <UserProfile />
      <Link to="/" className="link">
        <Search />
        <span className="link-name">Search</span>
      </Link>
      <Link to="/library" className="link">
        <Music />
        <span className="link-name">Library</span>
      </Link>
      <Playlists />
    </div>
  );
}

export default SideBar;
