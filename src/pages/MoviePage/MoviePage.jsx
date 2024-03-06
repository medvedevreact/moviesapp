import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";
import { AiOutlineUser } from "react-icons/ai";

export const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(
    localStorage.getItem(`movie_comments_${id}`)
      ? JSON.parse(localStorage.getItem(`movie_comments_${id}`))
      : []
  );
  const [commentInput, setCommentinput] = useState("");

  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => {
        setMovie(response.data.data.movie);
      })
      .catch((error) => {
        console.error("Ошибка загрузки", error);
      });
  }, [id]);

  const changeInput = (e) => {
    setCommentinput(e.target.value);
  };

  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem(`movie_comments_${id}`, JSON.stringify(comments));
  };

  const addComment = (newComment) => {
    const newComments = [...comments, newComment];
    setComments(newComments);
    saveCommentsToLocalStorage(newComments);
  };

  return (
    <div className="movie-window">
      {movie && (
        <div className="movie-window-again">
          <div>
            <img
              className="movie-window-img"
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </div>
          <div className="movie-window-text">
            <h1>{movie.title}</h1>
            <p className="year">{movie.year}</p>
            <h2 className="desc-title">Description</h2>
            <p className="movie-desc">{movie.description_full}</p>
            <h2>Comments</h2>

            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <AiOutlineUser className="user-icon" />
                <p className="comment-text">{comment}</p>
              </div>
            ))}

            <div className="add-comment">
              <input
                className="comment-input"
                type="text"
                placeholder="Leave a comment"
                value={commentInput}
                onChange={(e) => {
                  changeInput(e);
                }}
              />
              <button
                className="comment-button"
                onClick={() => {
                  addComment(commentInput);
                  setCommentinput("");
                }}
              >
                Оставить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
