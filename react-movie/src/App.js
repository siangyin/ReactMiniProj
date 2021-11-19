import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import Result from "./Components/Result";

import "./App.css";

function App() {
	const [find, setFind] = useState("");
	const [keyword, setKeyword] = useState("");
	const [moviesData, setMovieData] = useState([]);
	console.log(find);

	useEffect(() => {
		async function getMovie(keyword) {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=b05fd7dd6bdd2c89ac6a3374f2fa586e&query=${keyword}`;
			const getimg = "https://image.tmdb.org/t/p/original/";

			const savedres = [];
			try {
				const response = await fetch(url);
				const result = await response.json();
				console.log(result.results);
				result.results.map((obj) => {
					if (
						obj.id &&
						obj.original_title &&
						obj.poster_path &&
						obj.vote_average &&
						obj.release_date
					) {
						const newobj = {
							id: obj.id,
							title: obj.original_title,
							releaseDate: obj.release_date,
							img: `${getimg}${obj.poster_path}`,
							voting: obj.vote_average,
							overview: obj.overview,
						};
						savedres.push(newobj);
					}
				});
				setMovieData(savedres);
				console.log(savedres);
			} catch (err) {
				console.error(err);
				// Handle errors here, id, original_title,poster_path,release_date
			}
		}

		getMovie(keyword);
	}, [keyword]);

	return (
		<Router>
			<div className="App">
				<header className="App-header">🎬 React-Movies</header>

				<Switch>
					<Route exact path="/">
						<Search find={find} setFind={setFind} setKeyword={setKeyword} />
					</Route>

					<Route path="/result">
						<Result moviesData={moviesData} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
