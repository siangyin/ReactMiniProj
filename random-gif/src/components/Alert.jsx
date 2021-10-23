import React from "react";
import "./Alert.css";

function Alert(props) {
	return (
		<div className="backdrop" onClick={props.handleOkay}>
			<div className="alert">
				<p className="content">Please input a keyword to search</p>
				<button className="okbtn" onClick={props.handleOkay}>
					Okay
				</button>
			</div>
		</div>
	);
}

export default Alert;
