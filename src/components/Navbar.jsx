import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import AuthContext from "../context/AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> Film Frenzy
        </Link>
      </h2>

      {/* Busca só aparece se estiver logado */}
      {user && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      )}

      {/* Área de autenticação */}
      {user && (
        <div className="navbar-user">
          <span className="navbar-email">{user.email}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;