import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movie = (props) => {
  const movie = props.movie;

  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${movie.id}`,
          state: {
            movie,
          },
        }}
      >
        <div className="movie">
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            title={movie.title}
          />
          <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">
              {movie.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{movie.summary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
