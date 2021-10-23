import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Gallery from "./components/Gallery";
import Alert from "./components/Alert";

function App() {
	// https://tenor.com/view/so-cute-gif-18039115

	//input get the search key from there, and button handler
	const [alert, setAlert] = useState(false);

	function handleSavedWord(str) {
		if (str.trim().length === 0) {
			setAlert(true);
		} else if (str === "random") {
			console.log("find random gif");
		} else {
			console.log(`find ${str} gif`);
		}
	}

	function hideAlert(e) {
		setAlert(false);
	}
	return (
		<div className="App">
			{alert && <Alert handleOkay={hideAlert} />}
			<Header></Header>
			<Input onSavedWord={handleSavedWord} />
			<Gallery></Gallery>
		</div>
	);
}

export default App;
