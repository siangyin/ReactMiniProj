import React from "react";

function RandButton(props) {
	return (
		<button className="flex-item-3" name="pick" onClick={props.onClick}>
			Generate Random GIF
		</button>
	);
}

export default RandButton;
