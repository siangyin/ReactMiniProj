import React, { useState, useRef, useEffect } from "react";

function Input(props) {
	const inputRef = useRef();

	function handleClick(e) {
		e.preventDefault();

		if (e.target.name === "find") {
			if (inputRef.current.value.trim().length === 0) {
				props.onSavedWord("");
			}
			const str = inputRef.current.value;
			props.onSavedWord(str);
			inputRef.current.value = "";
		}

		if (e.target.name === "pick") {
			const str = "random";
			props.onSavedWord(str);
		}
	}

	return (
		<form className="flex-container">
			<input
				className="flex-item-1"
				placeholder="keyword search"
				name="word"
				ref={inputRef}
			></input>

			<button className="flex-item-2" name="find" onClick={handleClick}>
				Find GIF
			</button>
		</form>
	);
}

export default Input;
