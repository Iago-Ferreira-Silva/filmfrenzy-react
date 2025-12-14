import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import AuthContext from "../context/AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
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

      {/* Área do usuário */}
      {user && (
        <div className="navbar-user">
          <Link to="/favorites" className="navbar-link">
            Favoritos
          </Link>

          <span className="navbar-email">{user.email}</span>

          <button className="logout-btn" onClick={logout}>
            Sair
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;