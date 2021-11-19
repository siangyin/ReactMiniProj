import React from "react";

export default function Item({ title, id, releaseDate, img, voting }) {
	return (
		<article className="movie-item">
			<img src={img} alt={title}></img>
			<h4>{title}</h4>
			<h6>{voting}</h6>
			<h6>{releaseDate}</h6>
		</article>
	);
}
