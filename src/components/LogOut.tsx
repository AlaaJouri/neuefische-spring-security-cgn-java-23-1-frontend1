import useAuth from "../hooks/useAuth";
import axios from "axios";
import {useLocation} from "react-router-dom";

export default function LogOut () {
  const user = useAuth(false);
  const location = useLocation();

  return user && (
    <button onClick={() => {
      axios.post("/api/users/logout").then(() => {
        window.sessionStorage.setItem(
          "signInRedirect",
          location.pathname || "/"
        );
        window.location.href = "/sign-in";
      });
    }}>Logout</button>
  );
}