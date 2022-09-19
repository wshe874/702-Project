import Animation from "./component/Animation";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Congratulations from "./Pages/Congratulations";
import NotFound from "./Pages/NotFound";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
          <Route path="/game" element={<Game />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
