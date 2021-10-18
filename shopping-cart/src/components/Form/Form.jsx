import React, { useState } from "react";

function Form(props) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [highlight, setHightlight] = useState({
		backgroundColor: "white",
		border: "1px solid grey",
	});

	function onChangeProductHandler(e) {
		const value = e.target.value;
		setName(value);
	}

	function onChangePriceHandler(e) {
		const value = e.target.value;
		setPrice(value);
	}

	function onChangeDescriptionHandler(e) {
		const value = e.target.value;
		setDescription(value);
	}

	function submitHandler(e) {
		e.preventDefault();
		const objSet = { name: name, price: price, description: description };
		console.log("yeah submitted");
		props.onSaveObj(objSet);
		return setDescription(""), setPrice(""), setName("");
	}

	let btnTag = (
		<button type="submit" disabled>
			Submit
		</button>
	);
	if (name && price && description) {
		btnTag = <button type="submit">Submit</button>;
	}

	function handleKeyUp(e) {
		console.log(e.target.value);
		if (e.target.value === "") {
			setHightlight({
				backgroundColor: "#fdffb6",
				border: "1px solid red",
			});
		}
	}
	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={name}
				name="name"
				placeholder="product name"
				maxLength="30"
				onChange={onChangeProductHandler}
				onBlur={handleKeyUp}
				style={highlight}
			></input>
			<input
				type="number"
				value={price}
				name="price"
				placeholder="product price"
				min="0.01"
				step="0.01"
				onChange={onChangePriceHandler}
				onBlur={handleKeyUp}
				style={highlight}
			></input>
			<textarea
				name="description"
				value={description}
				placeholder="product description"
				onChange={onChangeDescriptionHandler}
				onBlur={handleKeyUp}
				style={highlight}
			></textarea>
			{btnTag}
		</form>
	);
}

export default Form;
