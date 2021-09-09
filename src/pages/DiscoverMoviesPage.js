import { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

// { status: "searching" },
//     { status: "done", data: [] },

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState({ status: "idle" });

  const queryParam = encodeURIComponent(searchText);

  const search = async () => {
    setSearchStatus({ status: "searching" });
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=ceb90160&s=${queryParam}`
      );
      console.log("response", response);
      setSearchStatus({ status: "done", data: response.data.Search });
    } catch (error) {
      console.log(error.message);
      setSearchStatus({ status: "error" });
    }
  };

  return (
    <div>
      <h1>Discover some movies!</h1>

      {searchStatus.status === "error" && (
        <div>There has been an error with the search</div>
      )}
      <div>
        {searchStatus.status === "searching" && <p>Loading, please wait.</p>}
      </div>
      <div>
        {searchStatus.status === "idle" && (
          <p>What is the movie you are looking for?</p>
        )}
      </div>
      <div>
        {searchStatus.status === "done" && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 20px",
            }}
          >
            {searchStatus.data.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                imdbID={movie.imdbID}
                poster={movie.Poster}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
}
