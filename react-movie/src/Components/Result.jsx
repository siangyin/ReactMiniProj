import { Link } from "react-router-dom";
import Item from "./Item";
import "./Result.css";

function Result({ moviesData }) {
	return (
		<main>
			<Link to="/" className="re-searchButton">
				<span className="re-searchButton">Back</span>
			</Link>
			<section className="movielist">
				{moviesData.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</section>
		</main>
	);
}

export default Result;
