import React from "react";

export default function weather(props) {
	return (
		<div className="weather">
			<img src={props.src} alt="" />
			<p>
				<span>conditions:</span> {props.conditions}
			</p>
			<p>
				<span>time:</span> {props.time}
			</p>
		</div>
	);
}
