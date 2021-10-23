import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Procedures from "./Procedures";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
	return (
		<div>
			<nav className="nav-list">
				<Link className="nav-item" to="/">
					Go to Home Page
				</Link>
				<Link className="nav-item" to="/procedures">
					See Our Procedures
				</Link>
				<Link className="nav-item" to="/contact">
					Contact Us!
				</Link>
			</nav>
			<div className="content-box">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/procedures">
						<Procedures />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</div>
	);
};

export default App;
