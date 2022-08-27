import React from "react";
import data from "../data/data";

export default function Meme() {
	const memes = data.data.memes;
	let meme: string;
	function generateMeme() {
		console.log(memes[Math.floor(Math.random() * memes.length)]);
		meme = memes[Math.floor(Math.random() * memes.length)].url;
		return meme;
	}
	return (
		<div>
			<div className="input">
				<div className="input-forms">
					<input type="text" placeholder="Top text" />
					<input type="text" placeholder="Bottom text" />
				</div>
				<button type="button" onClick={generateMeme} className="input-btn">
					Generate Meme 🖼️
				</button>
			</div>
			{/* <img src={generateMeme()} className="meme" /> */}
		</div>
	);
}
