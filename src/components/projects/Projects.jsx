import React from "react";
import SectionHeader from "../SectionHeader";
import ScrollDown from "../ScrollDown";
import iskotrack from "../../assets/iskotrack.png";
import smashflix from "../../assets/smashflix.png";
import portfolio from "../../assets/portfoliosite.png";
import ams from "../../assets/ams.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			title: "RFID AMS",
			description:
				"I built an attendance monitoring system with support for cashless transactions using RFID technology for my school as a project for my college thesis.",
			image: ams,
			note: true,
			noteDetails: "College Thesis",
			links: false,
			github: "",
			site: "",
			skills: ["VB.NET", "SQL"],
		},
		{
			title: "SmashFlix",
			description:
				"SmashFlix is a website where you can watch animes or movies online.",
			image: smashflix,
			note: false,
			noteDetails: "",
			links: true,
			github: "https://github.com/aluamark/smashflix",
			site: "https://smashflix.vercel.app/",
			skills: ["React", "TailwindCSS"],
		},
		{
			title: "My Portfolio",
			description: "A website where I can showcase my skills and projects.",
			image: portfolio,
			note: false,
			noteDetails: "",
			links: true,
			github: "https://github.com/aluamark/portfolio",
			site: "https://aluamark.vercel.app/",
			skills: ["React", "TailwindCSS"],
		},
		{
			title: "Iskotrack",
			description:
				"Iskotrack is one of my personal projects. It is a webapp used to track the player's daily earnings and elo ranking in a Web3 game called Axie Infinity. It is built around Axie Infinity's API.",
			image: iskotrack,
			note: false,
			noteDetails:
				"The website is still up but not working as it should anymore due to Axie Infinity's API changes.",
			links: true,
			github: "https://github.com/aluamark/iskotrack",
			site: "https://iskotrack.vercel.app",
			skills: ["React", "Redux", "Node", "Express"],
		},
	];

	return (
		<div id="projects" className="bg-neutral-300 pt-24 md:px-5">
			<div className="bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl">
				<SectionHeader title="PROJECTS" />

				<div className="text-neutral-300 text-md text-center pb-5 pt-8">
					{projects.map((project) => {
						return <Project key={project.title} project={project} />;
					})}
				</div>
			</div>
			<ScrollDown linkTo="#contact" />
		</div>
	);
};

export default Projects;
