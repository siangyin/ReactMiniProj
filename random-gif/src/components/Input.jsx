import React, { useState } from "react";

function Input(props) {
	const [inputValue, setInputValue] = useState("");

	function handleClick(e) {
		e.preventDefault();
		if (inputValue.trim().length === 0) {
			props.onSavedWord("");
		}
		props.onSavedWord(inputValue);
		setInputValue("");
	}

	const handleOnInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<form className="flex-container">
			<input
				className="flex-item-1"
				placeholder="keyword search"
				name="word"
				value={inputValue}
				onChange={handleOnInputChange}
			></input>

			<button className="flex-item-2" name="find" onClick={handleClick}>
				Find GIF
			</button>
		</form>
	);
}

export default Input;
