import React, { useState, useEffect } from "react";

export default function Meme() {
	const [memes, setMemes] = useState([]);
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		img: "https://i.imgflip.com/24y43o.jpg",
	});

	useEffect(async () => {
		async function getMemeData() {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setMemes(data.data.memes);
		}
		getMemeData();
	}, []);

	function generateMeme() {
		setMeme((prev) => {
			return { ...prev, img: memes[Math.floor(Math.random() * memes.length)].url };
		});
	}

	function updateText(event) {
		setMeme((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});

		console.log(meme);
	}

	return (
		<main>
			<div className="input">
				<div className="input-forms">
					<input type="text" placeholder="Top text" name="topText" onChange={updateText} value={meme.topText} />
					<input
						type="text"
						placeholder="Bottom text"
						name="bottomText"
						onChange={updateText}
						value={meme.bottomText}
					/>
				</div>
				<button type="button" onClick={generateMeme} className="input-btn">
					Generate Meme 🖼️
				</button>
			</div>
			<div className="meme">
				<img src={meme.img} className="meme-img" />
				<h3 className="meme-txt top">{meme.topText}</h3>
				<h3 className="meme-txt btm">{meme.bottomText}</h3>
			</div>
		</main>
	);
}
