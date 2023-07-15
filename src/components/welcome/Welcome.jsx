import React from "react";
import wholeBNW from "../../assets/whole-bnw-removebg.png";
import { PuffLoader } from "react-spinners";
import ScrollDown from "../ScrollDown";

const Welcome = ({ welcomeRef }) => {
	return (
		<div
			id="welcome"
			ref={welcomeRef}
			className="relative min-h-screen flex justify-center items-center bg-zinc-900 text-neutral-300 md:px-5 py-20 overflow-x-hidden"
		>
			<div
				className="relative flex flex-col-reverse md:flex-row items-center max-w-screen-lg mx-auto gap-10 md:px-10 z-30"
				data-aos="zoom-in"
			>
				<div className="flex flex-col gap-10 text-center md:text-left px-5 md:px-0 z-10">
					<div className="flex flex-col gap-5 w-screen md:w-full mx-auto md:mx-0">
						<h2 className="text-3xl">Nice to meet you!</h2>
						<h1 className="text-6xl leading-tight md:w-3/4">
							I'm{" "}
							<span className="border-b-4 border-green-500">
								Mark William Alua
							</span>
							.
						</h1>
					</div>

					<p className="px-10 md:px-0 md:w-1/2 w-screen mx-auto md:mx-0">
						Based in the PH, I'm a full-stack developer passionate about
						building accessible web apps that users love.
					</p>

					<div className="flex flex-col md:flex-row justify-center md:justify-start gap-5 w-1/2 mx-auto md:mx-0">
						<a
							href="#about"
							className="border border-green-500 hover:bg-green-500 hover:text-zinc-900 hover:font-semibold duration-300 px-10 py-2.5"
						>
							About
						</a>
						<a
							href="#projects"
							className="border border-green-500 hover:bg-green-500 hover:text-zinc-900 hover:font-semibold duration-300 px-10 py-2.5"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="border border-green-500 hover:bg-green-500 hover:text-zinc-900 hover:font-semibold duration-300 px-10 py-2.5"
						>
							Contact
						</a>
					</div>
				</div>
				<div className="md:absolute right-0">
					<img
						src={wholeBNW}
						alt="Mark Alua"
						className="w-[200px] md:w-[300px] lg:w-[250px]"
					/>
				</div>
				<div className="absolute flex flex-wrap opacity-10 z-0">
					<PuffLoader color="#36d7b7" speedMultiplier={0.5} size={850} />
				</div>
			</div>
			<ScrollDown linkTo="#about" />
		</div>
	);
};

export default Welcome;
