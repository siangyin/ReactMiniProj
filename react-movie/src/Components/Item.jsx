import { useState } from "react";

export default function Item({ title, id, releaseDate, img, voting }) {
	return (
		<article className="movie-item">
			<img src={img} alt={title}></img>
			<p>{title}</p>
			<h6>Vote: {voting}</h6>
			<h6>Release: {releaseDate}</h6>
		</article>
	);
}
