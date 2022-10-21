import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import "./NavBar.css";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`} className="butt">Details</Link>}
    </div>
  );
};

export default MovieCard;