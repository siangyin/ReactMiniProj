import React, { useState } from "react";
import Search from "./Components/Search";
import Result from "./Components/Result";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">🎬 TV-Maze</header>
			<Search />
			<Result />
		</div>
	);
}

export default App;
