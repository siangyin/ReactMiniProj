import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import Result from "./Components/Result";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">🎬 React-Movies</header>
				<Switch>
					<Route exact path="/">
						<Search />
					</Route>
				</Switch>
				<Switch>
					<Route path="/result">
						<Result />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
