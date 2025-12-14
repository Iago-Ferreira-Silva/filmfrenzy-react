import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext, useState } from "react";

import AuthContext from "../context/AuthContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./MovieCard.css";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const { user, toggleFavorite, isFavorite } = useContext(AuthContext);
  const [animate, setAnimate] = useState(false);

  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    toggleFavorite(movie);
    setAnimate(true);

    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <Card className="h-100 shadow-sm position-relative movie-card">
      {user && (
        <button
          onClick={handleFavorite}
          className={`favorite-btn ${
            favorite ? "favorite-active" : ""
          } ${animate ? "favorite-animate" : ""}`}
        >
          {favorite ? <FaStar /> : <FaRegStar />}
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