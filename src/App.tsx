import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/sign-up"}>Sign Up</Link>

        <Routes>
          <Route path={"/sign-up"} element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
