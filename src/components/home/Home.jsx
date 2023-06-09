import React from "react";
import { useState, useEffect } from "react";

import "./Home.css";
import dpFlipped from "../../assets/dp-flipped.png";

const Home = () => {
	const fullText = "I develop websites and webapps!";
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);

	const typeDescription = () => {
		setText("");
		setIndex(0);
		if (text !== fullText) {
			setTimeout(() => {
				setText(text + fullText[index]);
				setIndex(index + 1);
			}, 50);
		}
	};

	useEffect(() => {
		if (text !== fullText) {
			setTimeout(() => {
				setText(text + fullText[index]);
				setIndex(index + 1);
			}, 50);
		}
	}, [text, index]);

	return (
		<div id="home" className="h-screen w-full bg-zinc-900">
			<div
				className="flex flex-col justify-center h-full max-w-screen-lg mx-auto px-4"
				data-aos="zoom-in"
			>
				<div className="nm-flat-zinc-900-lg flex flex-col items-center rounded-3xl lg:flex-row py-10 mt-10 px-10">
					<div
						className="flex flex-col text-center lg:text-left w-3/4 lg:pl-10 mx-auto"
						data-aos="fade-right"
					>
						<div className="flex justify-center text-md md:text-xl pb-5 lg:justify-start">
							<button
								onClick={typeDescription}
								className="rounded w-20 bg-green-500 text-center hover:scale-110 duration-100"
							>
								Hello
							</button>
							<h2 className="typewriter flex font-bold text-neutral-300 pl-3">
								I am Mark!&nbsp;👋
								{/* <span className="z-0"></span> */}
							</h2>
						</div>
						<span className="text-4xl text-stone-500">&lt;&gt;</span>
						<h2 className="lg:pl-14 text-4xl sm:text-6xl font-bold text-white">
							{text}
						</h2>

						<span className="text-4xl text-stone-500 pt-3">&lt;/&gt;</span>
						<p className="text-green-500 italic pt-5 sm:pb-10 lg:pb-0">
							Software / Web Developer
						</p>
					</div>

					<div className="pt-10 sm:pt-0 lg:py-20">
						<img
							src={dpFlipped}
							alt="self-portrait"
							className="rounded-full mx-auto w-1/2 lg:w-3/4 shadow-lg shadow-green-800/50 max-w-lg"
						/>
					</div>
				</div>
				<div className="mx-auto mt-5">
					<a href="#about">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="w-5 h-5 fill-neutral-300 hover:fill-green-500  duration-300 animate-bounce"
						>
							<path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
