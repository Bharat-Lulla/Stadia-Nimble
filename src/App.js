import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Signin from "./UserAccouts/signin";
import Signup from "./UserAccouts/signup";
import Home from "./UserAccouts/Home";
import ProtectedRoute from "./UserAccouts/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Fixtures from "./Matches/Fixtures";
import Results from "./Matches/Results";
import PlayersInfo from "./playersInfo/PlayersInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/upcomingMatches" element={<Fixtures />}></Route>   
        <Route path="/ongoingMatches" element={<Results />}></Route>
        <Route path="/playersInfo" element={<PlayersInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
