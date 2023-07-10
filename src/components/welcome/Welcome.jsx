import React from "react";
import wholeBNW from "../../assets/whole-bnw-removebg.png";
import { PuffLoader } from "react-spinners";

const Welcome = ({ welcomeRef }) => {
	return (
		<div
			id="welcome"
			ref={welcomeRef}
			className="relative min-h-screen flex justify-center items-center bg-zinc-900 text-neutral-300 md:px-5 py-20 overflow-x-hidden"
		>
			<div className="absolute flex flex-wrap opacity-10">
				<PuffLoader color="#36d7b7" speedMultiplier={0.5} size={850} />
			</div>
			<div
				className="flex flex-col-reverse md:flex-row items-center max-w-screen-lg mx-auto gap-10 md:px-10"
				data-aos="zoom-in"
			>
				<div className="flex flex-col gap-20 text-center md:text-left px-5 md:px-0">
					<div className="flex flex-col gap-5">
						<h2 className="text-3xl">Nice to meet you!</h2>
						<h1 className="text-6xl leading-tight">
							I'm <span className="border-b-4 border-green-500">Mark Alua</span>
							.
						</h1>
					</div>

					<p className="px-10 md:px-0 w-full lg:w-1/2">
						Based in the PH, I'm a front-end developer passionate about building
						accessible web apps that users love.
					</p>
				</div>
				<div className="flex-none">
					<img
						src={wholeBNW}
						alt="Mark Alua"
						className="w-[200px] md:w-[300px]"
					/>
				</div>
			</div>
			<div className="absolute bottom-0 py-10">
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
	);
};

export default Welcome;
