import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.request.use(function (config) {
  return fetch("/api/csrf").then(() => {
    config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
    return config;
  });
}, function (error) {
  return Promise.reject(error);
});

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
