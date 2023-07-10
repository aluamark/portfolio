import React, { useState, useEffect } from "react";
import "./Home.css";

const Link = ({ title, link }) => {
	return (
		<div className="flex flex-col lg:flex-row justify-between md:w-1/2 md:px-5">
			<span className="text-white font-semibold">{title}:</span>
			<a href={link} className="hover:underline truncate">
				https://aluamark.vercel.app/
				<span className="text-white font-semibold">{link}</span>
			</a>
		</div>
	);
};

const Home = ({ run, setRun }) => {
	const [execute, setExecute] = useState(false);
	const [showCompile, setShowCompile] = useState(false);
	const [showView, setShowView] = useState(false);

	useEffect(() => {
		if (execute) {
			setTimeout(() => {
				setShowCompile(true);
			}, 1000);
		}
	}, [execute]);

	useEffect(() => {
		if (showCompile) {
			setTimeout(() => {
				setShowView(true);
				setRun(true);
			}, 3000);
		}
	}, [showCompile]);

	return (
		<div
			id="home"
			className="min-h-screen flex flex-col justify-between items-center py-5 bg-black text-neutral-300"
		>
			<div className="max-w-screen-lg w-full flex flex-col gap-5 px-5">
				<div className="flex justify-between pb-3 text-xs">
					<span className="border-b pb-1 text-white">TERMINAL</span>
					<div className="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-chevron-right-square"
						>
							<rect width="18" height="18" x="3" y="3" rx="2" />
							<path d="m10 8 4 4-4 4" />
						</svg>
						<span>{execute ? "node" : "powershell"}</span>
					</div>
				</div>
				<div className="flex flex-col gap-5 text-sm">
					<div className="flex flex-col">
						<span>Windows PowerShell</span>
						<span>
							Copyright (C) Microsoft Corporation. All rights reserved.
						</span>
					</div>
					<p>
						Try the new cross-platform PowerShell{" "}
						<a
							href="https://aka.ms/pscore6"
							target="blank"
							rel="noreferrer"
							className="hover:underline"
						>
							https://aka.ms/pscore6
						</a>
					</p>
					<div className="flex items-center">
						<div className="flex flex-wrap gap-2">
							<span>PS C:\Users\aluam\portfolio&gt;</span>
							<span className="text-yellow-300 ">npm</span>
							<div className="flex">
								start
								<span
									className={`${execute ? "hidden" : "typewriter z-0"}`}
								></span>
							</div>
						</div>
					</div>
					{execute && (
						<div className="flex flex-col">
							<span>&gt; portfolio@0.1.0 start</span>
							<span>&gt; react-scripts start</span>
						</div>
					)}

					{showCompile && (
						<span className="text-blue-400">
							Starting the development server...
						</span>
					)}

					{showView && (
						<>
							<span className="text-green-400">Compiled successfully!</span>
							<p>
								You can now view my{" "}
								<span className="text-white font-semibold">portfolio</span> in
								the browser.
							</p>
							<div className="flex flex-col">
								<Link title="Welcome" link="#welcome" />
								<Link title="About" link="#about" />
								<Link title="Projects" link="#projects" />
								<Link title="Contact" link="#contact" />
								<Link title="Resume" link="#resume" />
							</div>
							<p className="md:w-1/2">
								Note that the development build is not optimized. To create a
								production build, use{" "}
								<span className="text-blue-400">npm run build</span>.
							</p>
							<p>
								webpack compiled{" "}
								<span className="text-green-300">successfully</span>
							</p>
						</>
					)}
				</div>
				<div className="flex justify-end w-full pt-5">
					<button
						onClick={() => setExecute(true)}
						className={`${
							execute
								? "hidden"
								: "border border-green-500 hover:bg-green-800 px-10 p-1"
						}`}
					>
						Start Application
					</button>
				</div>
			</div>
			{run && (
				<div className="mx-auto my-5">
					<a href="#welcome">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="w-5 h-5 fill-neutral-300 hover:fill-green-500  duration-300 animate-bounce"
						>
							<path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
						</svg>
					</a>
				</div>
			)}
		</div>
	);
};

export default Home;
