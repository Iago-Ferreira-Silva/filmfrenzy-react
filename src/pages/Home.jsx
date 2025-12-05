import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import { Container, Row, Col } from "react-bootstrap";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center text-white">Melhores Filmes:</h2>

      {loading && <p className="text-center">Carregando filmes...</p>}

      <Row>
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;