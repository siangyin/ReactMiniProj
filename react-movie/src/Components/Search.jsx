import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";

function Search({ find, setFind, setKeyword }) {
	let history = useHistory();
	function handlesubmit(e) {
		e.preventDefault();
		console.log("submitted ", find);

		setKeyword(find);
		history.push("/result");
		setFind(null);
	}
	return (
		<section className="wrap">
			<form className="search">
				<input
					type="text"
					className="searchTerm"
					placeholder="What are you looking for?"
					value={find}
					onChange={(e) => {
						setFind(e.target.value);
					}}
				></input>

				<button type="button" className="searchButton" onClick={handlesubmit}>
					🔍
				</button>
			</form>
		</section>
	);
}

export default Search;
