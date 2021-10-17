import React from "react";
import "./styles.css";
import Weather from "./components/WeatherIcons";
import data from "./weatherData";

const Weathers = data.map((record, index) => {
	// return (
	// 	<div className="weather" key={index}>
	// 		<img src={record.src} alt="" />
	// 		<p>
	// 			<span>conditions:</span> {record.conditions}
	// 		</p>
	// 		<p>
	// 			<span>time:</span> {record.time}
	// 		</p>
	// 	</div>
	// );

	return <Weather key={index} {...record} />;
});

export default function App() {
	return (
		<div className="App">
			<h1>My WeatherIcons App</h1>
			<section>{Weathers}</section>
		</div>
	);
}
