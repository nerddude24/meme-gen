import React from "react";
import "./App.css";
import Meme from "./comp/Meme";

function App() {
	return (
		<div className="App">
			<nav>
				<img src="https://img.icons8.com/fluency/48/000000/trollface.png" alt="" />
				<h1>Meme Generator</h1>
				<h4>React Course - Project 5</h4>
			</nav>
			<main>
				<Meme></Meme>
			</main>
		</div>
	);
}

export default App;
