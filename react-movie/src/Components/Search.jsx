import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Search.css";

function Search({ find, setFind }) {
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

				<button
					type="button"
					className="searchButton"
					onClick={() => {
						console.log(find);
					}}
				>
					🔍
				</button>
			</form>
		</section>
	);
}

export default Search;
