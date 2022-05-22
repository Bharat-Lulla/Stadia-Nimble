import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Signin from "./UserAccouts/signin";
import Signup from "./UserAccouts/signup";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from './contexts/AuthContext'
import Homepage from "./pages/Homepage";
import Fixtures from "./Matches/Fixtures";
import Results from "./Matches/Results";
import PlayersInfo from "./playersInfo/PlayersInfo";
import Loginpage from './pages/Loginpage'
import NotfoundPage from './pages/NotfoundPage'
import Profilepage from './pages/Profilepage'
import Registerpage from './pages/Registerpage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import TestPage from './pages/TestPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/login' element={<Loginpage/>} />
          <Route exact path='/register' element={<Registerpage/>} />
          < Route exact path='/profile' element={<Profilepage/>} />
          < Route exact path='/test' element={<TestPage/>} />
          < Route
            exact
            path='/forgot-password'
            element={<ForgotPasswordPage/>}
          />
          < Route
            exact
            path='/reset-password'
            element={<ResetPasswordPage/>}
          />
          <Route exact path='*' element={NotfoundPage} />
        
        <Route path="/upcomingMatches" element={<Fixtures />}></Route>   
        <Route path="/ongoingMatches" element={<Results />}></Route>
        <Route path="/playersInfo" element={<PlayersInfo />}></Route>
      </Routes>
    </div>
  );
}
// function  ProtectedRoute(props) {
//   const { currentUser } = useAuth()
//   const { path } = props
//   console.log('path', path)
//   const location = useLocation()
//   console.log('location state', location.state)

//   if (
//     path === '/login' ||
//     path === '/register' ||
//     path === '/forgot-password' ||
//     path === '/reset-password'
//   ) {
//     return currentUser ? (
//       <Navigate to={location.state?.from ?? '/profile'} />
//     ) : (
//       <Route {...props} />
//     )
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Navigate
//       to={{
//         pathname: '/login',
//         state: { from: path },
//       }}
//     />
//   )
// }

export default App;
