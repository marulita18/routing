import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { imdb_id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    //   console.log("my response is", response);
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${imdb_id}&apikey=ceb90160`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    // setMovies(response);
  }, [imdb_id]);

  return (
    <div
      style={{
        padding: "20px",
        lineHeight: "25px",
      }}
    >
      The movie {movie.Title}, released in {movie.Year} has the following actors{" "}
      {movie.Actors}. Was filmed in {movie.Country}.
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>Genre: {movie.Genre}</li>
        <li>Director: {movie.Director}</li>
        <li>Language: {movie.Language}</li>
      </ul>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
        alt="Poster"
      />
    </div>
  );
}
