import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../components/Movie/Movie";
const LIMIT_PER_PAGE = 10;

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState(
    Array.from({ length: 3 }, (_, index) => index + 1)
  );

  useEffect(() => {
    axios
      .get(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${LIMIT_PER_PAGE}`
      )
      .then((response) => {
        setMovies(response.data.data.movies);
      })
      .catch((error) => {
        console.error("Ошибка загрузки", error);
      });
  }, [page]);

  console.log(movies);

  const changePage = (pageNum) => {
    if (pageNum === 1) {
      setPage(pageNum);
      return;
    }
    setPage(pageNum);
    console.log(pageNum, "страница");

    setPageNumbers([pageNum - 1, pageNum, pageNum + 1]);
  };
  return (
    <div>
      <div className="movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie
              img={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
            />
          </Link>
        ))}
      </div>
      <div className="pag-buttons">
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => changePage(pageNum)}
            className={`pag-btn ${pageNum === page ? "active" : ""}`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};
