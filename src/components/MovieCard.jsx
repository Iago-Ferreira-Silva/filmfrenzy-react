import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <Card className="h-100 shadow-sm">
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