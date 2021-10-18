import React, { useState } from "react";
import "./styles.css";
import AllProducts from "./components/AllTheThings/AllProducts";
import ShoppingCart from "./components/MyShoppingCart/ShoppingCart";
import Form from "./components/Form/Form";
import productsArr from "./products";

export default function App() {
	const [products, setProducts] = useState(productsArr);
	const [cart, setCart] = useState([]);

	function list(arr, cb) {
		const listing = arr.map((item, i) => {
			return (
				<li key={item.name + item.price + i} id={i} onClick={cb}>
					{item.name} - ${item.price} <br />
					{item.description}
				</li>
			);
		});
		return listing;
	}

	function addToCart(prod) {
		setCart([...cart, prod]);
	}

	function handleAddClick(e) {
		const index = e.target.id;
		products[index].hasOwnProperty("Qty")
			? (products[index].Qty += 1)
			: (products[index].Qty = 1);
		const obj = { name: products[index].name, price: products[index].price };
		addToCart(obj);
	}

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
			<Form />
			<div className="products">
				<AllProducts>{list(products, handleAddClick)}</AllProducts>
				<ShoppingCart>{list(cart, handleRemove)}</ShoppingCart>
			</div>
		</div>
	);
}
