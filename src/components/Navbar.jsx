import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as BsNavbar,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <BsNavbar bg="dark" expand="lg" className="shadow-lg border-bottom border-secondary">
      <Container>
        <BsNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-info d-flex align-items-center gap-2"
        >
          <BiCameraMovie size={22} />
          Film Frenzy
        </BsNavbar.Brand>

        <BsNavbar.Toggle />

        <BsNavbar.Collapse>
          {user && (
            <Form className="d-flex mx-auto" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Buscar filme..."
                className="me-2 bg-dark text-light border-secondary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="info" type="submit">
                <BiSearchAlt2 />
              </Button>
            </Form>
          )}

          {user && (
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link as={Link} to="/favorites" className="text-light">
                Favoritos
              </Nav.Link>

              <span className="text-secondary small">
                {user.email}
              </span>

              <Button
                variant="outline-info"
                size="sm"
                onClick={logout}
              >
                Sair
              </Button>
            </Nav>
          )}
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;