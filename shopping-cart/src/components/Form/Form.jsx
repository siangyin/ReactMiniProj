import React, { useState } from "react";

function Form(props) {
	function onChangeProductHandler(e) {
		const value = e.target.value;
		console.log(value);
	}

	function onChangePriceHandler(e) {
		const value = e.target.value;
		console.log(value);
	}

	function onChangeDescriptionHandler(e) {
		const value = e.target.value;
		console.log(value);
	}

	function newItem(e) {
		e.preventDefault();
		return console.log("yeah submitted");
	}

	return (
		<div className="Form">
			<h2>Enter new item here</h2>
			<form onSubmit={newItem}>
				<input
					type="text"
					name="name"
					placeholder="product name"
					maxLength="30"
					onChange={onChangeProductHandler}
				></input>
				<input
					type="number"
					name="price"
					placeholder="product price"
					min="0.01"
					step="0.01"
					onChange={onChangePriceHandler}
				></input>
				<textarea
					name="description"
					placeholder="product description"
					onChange={onChangeDescriptionHandler}
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
