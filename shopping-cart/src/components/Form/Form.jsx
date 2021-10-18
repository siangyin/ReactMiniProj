import React, { useState } from "react";

function Form(props) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

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

	function newEntryItem(e) {
		e.preventDefault();
		const objSet = { name: name, price: price, description: description };
		console.log("yeah submitted");
		return console.log(objSet);
	}

	return (
		<div className="Form">
			<h2>Enter new item here</h2>
			<form onSubmit={newEntryItem}>
				<input
					type="text"
					value={name}
					name="name"
					placeholder="product name"
					maxLength="30"
					onChange={onChangeProductHandler}
				></input>
				<input
					type="number"
					value={price}
					name="price"
					placeholder="product price"
					min="0.01"
					step="0.01"
					onChange={onChangePriceHandler}
				></input>
				<textarea
					name="description"
					value={description}
					placeholder="product description"
					onChange={onChangeDescriptionHandler}
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
