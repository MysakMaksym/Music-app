import "../styles/SongCard.scss";

function SongCard({ song, setActiveSong }) {
  const openInfo = () => {
    setActiveSong(song);
  };
  return (
    <div onClick={openInfo} className="SongCard">
      name: {song.artist}
    </div>
  );
}

export default SongCard;
