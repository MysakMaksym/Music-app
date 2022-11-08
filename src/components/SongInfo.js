import "../styles/SongInfo.scss";

function SongInfo({ song, setActiveSong }) {
  const close = () => {
    setActiveSong(null);
  };
  return (
    <div className="SongInfo">
      Info: {song.artist}
      <button onClick={close}>Close</button>
    </div>
  );
}

export default SongInfo;
