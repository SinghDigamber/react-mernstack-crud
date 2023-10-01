import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-student"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-student" element={<CreateStudent />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
            <Route exact path="/student-list" element={<StudentList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
