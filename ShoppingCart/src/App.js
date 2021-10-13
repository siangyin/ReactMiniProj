// import useState
import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
// import Form from "./components/Form";
import productsArr from "./products";

export default function App() {
	const product = productsArr.map((item, i) => {
		return (
			<li key={item.name + item.price} id={i} onClick={handleAddToCart}>
				{item.name} - ${item.price}
			</li>
		);
	});

	const [products, setProducts] = useState(product);
	const [cart, setCart] = useState([]);

	// create an addToCart function that takes in a product as a param
	// using the ...spread operator add the product to the cart array

	function handleAddToCart(e) {
		const index = e.target.id;
		console.log(productsArr[index]);
		setCart(cart.push(productsArr[index]));
		console.log(cart);
	}

	// create an removeFromCart function that takes in an index as a param
	// using Array.filter remove create a new array where that item is removed

	return (
		<div className="App">
			<h1>Big Time Shopping</h1>
			{/* <Form /> */}
			<div className="products">
				<AllTheThings>{products}</AllTheThings>
				{cart.length === 0 ? (
					<MyShoppingCart />
				) : (
					<MyShoppingCart>{cart}</MyShoppingCart>
				)}
			</div>
		</div>
	);
}
