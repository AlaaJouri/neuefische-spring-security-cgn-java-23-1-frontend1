import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";
import Cookies from "js-cookie";
import SignInPage from "./pages/SignInPage";

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
        <Link to={"/sign-up"}>Sign Up</Link> &nbsp; <Link to={"/sign-in"}>Sign In</Link>

        <Routes>
          <Route path={"/sign-up"} element={<SignUpPage/>}/>
          <Route path={"/sign-in"} element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
