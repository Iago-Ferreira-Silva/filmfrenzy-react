import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import AuthContext from "../context/AuthContext";

import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

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
    <BootstrapNavbar expand="lg" variant="dark" className="navbar-custom">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <BiCameraMovie size={24} /> Film Frenzy
        </BootstrapNavbar.Brand>

        {/* Botão hamburguer */}
        <BootstrapNavbar.Toggle aria-controls="navbar-content" />

        <BootstrapNavbar.Collapse id="navbar-content">
          {user && (
            <Form
              className="d-flex mx-lg-auto my-3 my-lg-0 navbar-search"
              onSubmit={handleSubmit}
            >
              <Form.Control
                type="text"
                placeholder="Buscar filme"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit">
                <BiSearchAlt2 />
              </Button>
            </Form>
          )}

          {user && (
            <Nav className="ms-lg-auto text-center">
              <Nav.Link as={Link} to="/favorites">
                Favoritos
              </Nav.Link>

              <span className="navbar-email">{user.email}</span>

              <Button
                variant="outline-info"
                size="sm"
                className="mt-2 mt-lg-0 ms-lg-3"
                onClick={logout}
              >
                Sair
              </Button>
            </Nav>
          )}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;