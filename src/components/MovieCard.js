import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  console.log(props.imdbID);
  return (
    <div
      style={{
        width: "25%",
        boxSizing: "border-box",
        padding: "10px",
      }}
    >
      <Link to={`/movie/${props.imdbID}`}>{props.title}</Link>
      {props.year}
      <img
        src={props.poster}
        alt={props.title}
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}
