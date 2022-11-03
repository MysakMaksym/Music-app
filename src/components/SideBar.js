import "../styles/SideBar.scss";
import UserProfile from "./UserProfile";
import { ReactComponent as Music } from "../icons/music.svg";
import { ReactComponent as Playlist } from "../icons/playlist.svg";
import { ReactComponent as Search } from "../icons/search.svg";

function SideBar() {
  return (
    <div className="SideBar">
      <UserProfile />
      <div className="link">
        <Search />
        <span className="link-name">Search</span>
      </div>
      <div className="link">
        <Music />
        <span className="link-name">Library</span>
      </div>
    </div>
  );
}

export default SideBar;
