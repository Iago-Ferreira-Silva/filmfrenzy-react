import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import { Container, Row, Col } from "react-bootstrap";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${encodeURIComponent(
      query
    )}&language=pt-BR`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center text-white">
        Resultados para: <span style={{ color: "#f7d354" }}>{query}</span>
      </h2>

      {loading && <p className="text-center text-white">Carregando filmes...</p>}

      {!loading && movies.length === 0 && (
        <p className="text-center text-white">Nenhum resultado encontrado.</p>
      )}

      <Row>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Search;