import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";
import Auth from "./pages/auth/Auth";
import TvseriesPage from "./pages/user/TvseriesPage";
import MoviesPage from "./pages/user/MoviesPage";
import NotFound from "./components/NotFound";
import HomePage from "./pages/user/HomePage";
import Profile from "./pages/user/Profile";
import DetailPage from "./pages/user/DetailPage";
import Upgrade from "./pages/user/Upgrade";
import LayoutUser from "./pages/layout/LayoutUser";
import LayoutAdmin from "./pages/layout/LayoutAdmin";
import Listfilms from "./pages/admin/listFilmAdmin/listfilms";
import Addfilm from "./pages/admin/Addfilm";
import ListTransaction from "./pages/admin/ListTransaction";
import AdDetailPage from "./pages/admin/AdDetailPage";
import "./App.css";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  // console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.status === "Admin") {
        navigate("/admin");
      } else if (state.user.status === "Customer") {
        navigate("/user");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);
  return (
    <>
      <Routes>
        {/* user */}
        <Route path="/" element={<Auth />} />
        <Route path="/user" element={<LayoutUser />}>
          <Route index element={<HomePage />} />
          <Route path="/user/tvshows" element={<TvseriesPage />} />
          <Route path="/user/movies" element={<MoviesPage />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/upgrade" element={<Upgrade />} />
          <Route path="/user/detailfilm" element={<DetailPage />} />
        </Route>
        {/* admin */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<ListTransaction />} />
          <Route path="/admin/addfilm" element={<Addfilm />} />
          <Route path="/admin/listfilms" element={<Listfilms />} />
          <Route path="/admin/listfilms/:category" element={<Listfilms />} />
          <Route path="/admin/detail" element={<AdDetailPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
