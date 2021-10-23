import React from "react";
import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Gallery from "./components/Gallery";

function App() {
	// https://tenor.com/view/so-cute-gif-18039115

	//input get the search key from there, and button handler

	return (
		<div className="App">
			<Header></Header>
			<Input></Input>
			<Gallery></Gallery>
		</div>
	);
}

export default App;
