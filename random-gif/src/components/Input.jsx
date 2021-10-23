import React, { useState, useRef, useEffect } from "react";

function Input() {
	const [keyword, setKeyword] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		console.log("was rendered");
	});

	function handleClick(e) {
		e.preventDefault();
		if (e.target.name === "find") {
			setKeyword(inputRef.current.value);
		}

		if (e.target.name === "pick") {
			setKeyword("random");
		}
		console.log(e.target.name);
		console.log(keyword);
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
			<button className="flex-item-2" name="pick" onClick={handleClick}>
				Generate Random GIF
			</button>
		</form>
	);
}

export default Input;
