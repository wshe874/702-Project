import Home from "./Pages/Home";
import Congratulations from "./Pages/Congratulations";
import NotFound from "./Pages/NotFound";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LevelPage from "./Pages/LevelPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |<Link to="/game"> Game</Link> |
          <Link to="/congratulations"> Congratulations</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<LevelPage />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
