import React from "react";
import "../index.css";

function Gallery(props) {
	return (
		<div className="RandGif">
			<img src={props.onImgObj} alt="loading" />
		</div>
	);
}

export default Gallery;
