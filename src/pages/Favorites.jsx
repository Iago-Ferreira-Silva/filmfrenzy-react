import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import MovieCard from "../components/MovieCard.jsx";
import { Container, Row, Col } from "react-bootstrap";

const Favorites = () => {
  const { user, getFavorites, toggleFavorite } = useContext(AuthContext);
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  if (!user) {
    navigate("/login");
    return null; // Se não estiver logado, redireciona para a tela de login
  }

  const favorites = getFavorites();

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center text-white">Meus Favoritos</h2>

      {favorites.length === 0 && (
        <p className="text-center text-white">Você não tem favoritos.</p>
      )}

      <Row>
        {favorites.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MovieCard
              movie={movie}
              showLink={false}
              toggleFavorite={toggleFavorite} // Passando função de favoritar
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;