// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
	console.log();

	// USE useState TO CREATE  [bigImage, setBigImage]
	// AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
	const [bigImage, setBigImage] = useState(imagesArr[0].img);

	// CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
	// THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
	function clickedImg(e) {
		const target = e.target.src;
		return setBigImage(target);
	}

	// CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT

	// ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

	const images = imagesArr.map((item, index) => {
		const customStyle = {
			border: "lightgreen",
			borderWidth: "5px",
			borderStyle: "solid",
		};

		return bigImage === item.img ? (
			<img
				key={"img" + index}
				className="thumb"
				src={item.img}
				alt={item.city}
				onClick={clickedImg}
				style={customStyle}
			/>
		) : (
			<img
				key={"img" + index}
				className="thumb"
				src={item.img}
				alt={item.city}
				onClick={clickedImg}
			/>
		);
	});

	return (
		<div className="App">
			<h1>Cities Of The World</h1>
			<div id="wrapper">
				<div id="thumbnails">{images}</div>
				<img src={bigImage} id="bigimage" alt="bigImage" />
			</div>
		</div>
	);
}
