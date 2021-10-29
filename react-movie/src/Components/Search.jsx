import React, { useState } from "react";
import "./Search.css";

function Search(props) {
	return (
		<section className="wrap">
			<form className="search">
				<input
					type="text"
					className="searchTerm"
					placeholder="What are you looking for?"
				></input>
				<button type="submit" className="searchButton">
					🔍
				</button>
			</form>
		</section>
	);
}

export default Search;
