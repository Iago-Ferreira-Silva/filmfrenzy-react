import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rotas privadas */}
          <Route
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);