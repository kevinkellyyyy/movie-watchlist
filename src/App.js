import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Navbar from "./components/Navbar";
import SearchMoviePage from "./components/SearchMoviePage";
import WatchedPage from "./components/WatchedPage";
import WatchListPage from "./components/WatchListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<WatchListPage />} />
          <Route path="/watched" element={<WatchedPage />} />
          <Route path="/add-movie" element={<SearchMoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
