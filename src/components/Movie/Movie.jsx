import React from "react";
import "./Movie.css";
import star from "../../img/star 8.svg";

export const Movie = ({ img, genres, rating }) => {
  return (
    <div className="movie">
      <img className="movie-image" src={img} alt="" />
      <img className="star-icon" src={star} alt="" />
      <p className="rating">{rating}</p>
      <div className="genres">
        {genres.map((genre) => (
          <p className="genre">{genre}</p>
        ))}
      </div>
      <button className="more-btn">More</button>
    </div>
  );
};
