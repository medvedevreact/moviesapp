import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="movies-header">
      <Link className="link-no-underline" to={"/"}>
        <h2 className="movie-logo">Movies.com</h2>
      </Link>
    </header>
  );
};
