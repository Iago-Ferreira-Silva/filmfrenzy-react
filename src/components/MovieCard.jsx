import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const { user, toggleFavorite, isFavorite } = useContext(AuthContext);

  const favorite = isFavorite(movie.id);

  return (
    <Card className="h-100 shadow-sm position-relative">
      {/* Favorito */}
      {user && (
        <button
          onClick={() => toggleFavorite(movie)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.4rem",
          }}
        >
          {favorite ? (
            <FaStar color="#f5c518" />
          ) : (
            <FaRegStar color="#fff" />
          )}
        </button>
      )}

      <Card.Img
        variant="top"
        src={imagesURL + movie.poster_path}
        alt={movie.title}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>

        <Card.Text className="mt-2">
          <FaStar className="text-warning" /> {movie.vote_average}
        </Card.Text>

        {showLink && (
          <Button
            as={Link}
            to={`/movie/${movie.id}`}
            variant="primary"
            className="mt-auto"
          >
            Detalhes
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;