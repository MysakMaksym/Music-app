import "../styles/App.scss";
import SideBar from "./SideBar.js";
import All from "./All.js";
import Library from "./Library.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/" element={<All />} />
      </Routes>
    </div>
  );
}

export default App;
