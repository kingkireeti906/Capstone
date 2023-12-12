import React, { useState } from "react";
import List from "./List.jsx";
import Profile from './images/image 14.png';
import styles from "./List.module.css";
import { useNavigate } from "react-router-dom";
import Pageb from "./pageb.jsx";

const Movies = () => {
  const [showPageb, setShowPageb] = useState(false);
  const navigate = useNavigate();

  const capstone = () => {
    setShowPageb(true);
  };

  const movies = JSON.parse(window.localStorage.getItem("categories"));

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        {!showPageb && (
          <>
            <img
              src={Profile}
              onClick={capstone}
              style={{
                position: "absolute",
                top: "2vh",
                right: "3vw",
                height: "60px",
                width: "60px",
              }}
            />
            <p
              style={{
                color: "green",
                fontSize: "3rem",
                margin: "1vw",
              }}
              className={styles.header}
            >
              Super app
            </p>
            <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
              Entertainment according to your choice
            </p>
            {movies.map((movie) => (
              <List key={movie.id} genre={movie} />
            ))}
          </>
        )}

        {/* Conditional rendering for Pageb */}
        {showPageb && <Pageb />}
      </div>
    </>
  );
};

export default Movies;
