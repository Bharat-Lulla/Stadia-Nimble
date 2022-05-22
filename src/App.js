import './App.css';
import { Container,Row, Col } from 'react-bootstrap';
import Signin from "./UserAccouts/signin"
import Signup from "./UserAccouts/signup"
import Home from "./UserAccouts/Home"
import ProtectedRoute from "./UserAccouts/ProtectedRoute";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <Routes>
          <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
