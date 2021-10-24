import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import RandButton from "./components/RandButton";
import Gallery from "./components/Gallery";
import Alert from "./components/Alert";
import axios from "axios";

function App() {
	const [keyword, setKeyword] = useState("");
	const [allRandomGif, setAllRandomGif] = useState();
	const [currGifUrl, setCurrGifUrl] = useState(
		"https://c.tenor.com/7NX24XoJX0MAAAAC/loading-fast.gif"
	);
	const [alert, setAlert] = useState(false);
	const APIkey = "lFwuMbf2H89fVRV23hXR8ogP7YsVryk7";
	let naming = "";

	async function getRandGif() {
		try {
			const response = await axios.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=random&limit=50&offset=0&rating=g&lang=en`
			);
			const objArr = response.data.data.map((obj) => {
				return {
					src: obj.images.original.url,
					title: obj.title,
					id: obj.id,
				};
			});
			setAllRandomGif(objArr);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	async function searchGif(keyword) {
		console.log(`search gif for ${keyword}`);
		try {
			const randIdx = Math.floor(Math.random() * 50);
			const search = keyword.replaceAll(" ", "%20");
			const response = await axios.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${search}&limit=50&offset=0&rating=g&lang=en`
			);

			const objArr = response.data.data.map((obj) => {
				return {
					src: obj.images.original.url,
					title: obj.title,
					id: obj.id,
				};
			});
			console.log(objArr[randIdx].src);
			setCurrGifUrl(objArr[randIdx].src);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	useEffect(() => {
		console.log(`rendering`);
		getRandGif();
	}, [keyword, naming]);

	function handleInputWord(str) {
		if (str.trim().length === 0) {
			setAlert(true);
		} else {
			searchGif(str);
			setKeyword(str);
			naming = str;
		}
	}

	function randomClick() {
		const randIdx = Math.floor(Math.random() * 50);
		console.log("clicked random");
		setCurrGifUrl(allRandomGif[randIdx].src);
	}

	function hideAlert(e) {
		setAlert(false);
	}

	return (
		<div className="App">
			{alert && <Alert handleOkay={hideAlert} />}
			<Header></Header>
			<Input onSavedWord={handleInputWord} />
			<RandButton onClick={randomClick} />
			<Gallery onImgObj={currGifUrl}></Gallery>
		</div>
	);
}

export default App;
