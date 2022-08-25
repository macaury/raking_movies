import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard.jsx";
import Movie from "./Movie.jsx";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css";

const Search = () => {
	const [searchParams] = useSearchParams();

	const [movies,setMovies] = useState([])
	const query = searchParams.get("q");


	const getSearchMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchQueryUrl = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchQueryUrl);
  }, [query]);

	return (
		<>
			<div className="container">
				<h2 className="title">Result for : <span className="query-text">{query}</span> </h2>
				<div className="movies-container">
					{movies.length === 0 && <p>loading...</p>}
					{movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
				</div>
			</div>
		</>
	);

};

export default Search;