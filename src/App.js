import React from "react";
import "./App.css";
import axios from "axios";
import Movie from "./movies";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  const getMovies = async () => {
    const movieData = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movieData.data.data.movies);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getMovies();
  });

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </section>
  );
}

export default App;
