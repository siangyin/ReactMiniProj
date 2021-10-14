import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
// import Form from "./components/Form";
import productsArr from "./products";

export default function App() {
	const newProdList = [];
	for (let key in productsArr) {
		newProdList.push({
			name: productsArr[key].name,
			price: productsArr[key].price,
			Qty: 10,
		});
	}

	const [products, setProducts] = useState(newProdList);
	const [cart, setCart] = useState([]);

	function list(arr, cb) {
		const listing = arr.map((item, i) => {
			return (
				<li key={item.name + item.price + i} id={i} onClick={cb}>
					{item.name} - ${item.price}
				</li>
			);
		});
		return listing;
	}

	// create an addToCart function that takes in a product as a param
	// using the ...spread operator add the product to the cart array

	function addToCart(prod) {
		setCart([...cart, prod]);
	}

	function handleAddClick(e) {
		const index = e.target.id;
		products[index].hasOwnProperty("Qty")
			? (products[index].Qty -= 1)
			: (products[index].Qty = 10);
		const obj = { name: products[index].name, price: products[index].price };
		addToCart(obj);
	}

	// create an removeFromCart function that takes in an index as a param
	// using Array.filter remove create a new array where that item is removed

	function removeFromCart(i) {
		const newCart = cart.filter((element, idx) => {
			return parseInt(i) !== idx;
		});
		setCart(newCart);
	}

	function handleRemove(e) {
		const i = e.currentTarget.id;
		removeFromCart(i);
	}

	return (
		<div className="App">
			<h1>Big Time Shopping</h1>
			{/* <Form /> */}
			<div className="products">
				<AllTheThings>{list(products, handleAddClick)}</AllTheThings>
				<MyShoppingCart>{list(cart, handleRemove)}</MyShoppingCart>
			</div>
		</div>
	);
}
