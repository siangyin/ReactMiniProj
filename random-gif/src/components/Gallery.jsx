import React from "react";
import "../index.css";

function Gallery(props) {
	const initial =
		"http://images6.fanpop.com/image/photos/38600000/Ditto-pokemon-38620539-300-500.jpg";
	return (
		<div className="RandGif">
			<img
				src={props.onImgObj === undefined ? initial : props.onImgObj}
				alt="loading"
			/>
		</div>
	);
}

export default Gallery;
