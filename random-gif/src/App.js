import React from "react";
import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Gallery from "./components/Gallery";

function App() {
	// https://tenor.com/view/so-cute-gif-18039115

	//input get the search key from there, and button handler

	function handleSavedWord(str) {
		if (str === "random") {
			console.log("find random gif");
		} else {
			console.log(`find ${str} gif`);
		}
	}
	return (
		<div className="App">
			<Header></Header>
			<Input onSavedWord={handleSavedWord} />
			<Gallery></Gallery>
		</div>
	);
}

export default App;
