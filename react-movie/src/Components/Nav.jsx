import React from "react";

import { Route, Switch, Link, Redirect } from "react-router-dom";


const Nav = () => {
	return (
		<div>
			<header className="App-header">
				<span>🎬 React-Movies</span>
				<nav className="nav-list">
					<Link className="nav-item" to="/">
						Home
					</Link>
					<Link className="nav-item" to="/about">
						About
					</Link>
					<Link className="nav-item" to="/contact">
						Contact Us!
					</Link>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
