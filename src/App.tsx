import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";
import Cookies from "js-cookie";
import SignInPage from "./pages/SignInPage";
import CarsPage from "./pages/CarsPage";
import MixedAuthPage from "./pages/MixedAuthPage";

axios.interceptors.request.use(function (config) {
  return fetch("/api/csrf").then(() => {
    config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
    return config;
  });
}, function (error) {
  return Promise.reject(error);
});

// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   if (error.response.status === 401) {
//     window.location.href = "/sign-in";
//   }
//
//   return Promise.reject(error);
// });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/sign-up"}>Sign Up</Link> &nbsp; <Link to={"/sign-in"}>Sign In</Link> &nbsp; <Link to={"/cars"}>Cars</Link> &nbsp; <Link to={"/mixed-auth-page"}>Mixed Auth Page</Link>

        <Routes>
          <Route path={"/sign-up"} element={<SignUpPage/>}/>
          <Route path={"/sign-in"} element={<SignInPage/>}/>
          <Route path={"/cars"} element={<CarsPage/>}/>
          <Route path={"/mixed-auth-page"} element={<MixedAuthPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
