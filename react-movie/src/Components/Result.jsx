import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Result.css";

function Result() {
	return (
		<article className="result">
			<Link to="/" className="re-searchButton">
				Back
			</Link>
			<button type="button" className="re-searchButton">
				Search again
			</button>
		</article>
	);
}

export default Result;
