import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "./redux/navigationSlice";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";

function App() {
  // Redux의 useDispatch 훅을 사용하여 디스패치 함수를 가져옴
  const dispatch = useDispatch();

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => dispatch(setCurrentPage("/"))}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => dispatch(setCurrentPage("/login"))}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
