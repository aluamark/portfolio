import iskotrack from "../../assets/iskotrack.png";
import smashflix from "../../assets/smashflix.png";
import smashbook from "../../assets/smashbook.png";
import portfolio from "../../assets/portfoliosite.png";
import panahon from "../../assets/panahon.png";
import ams from "../../assets/ams.png";

export const projects = [
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
		title: "Smashbook",
		description: "Smashbook is a social media app like facebook.",
		image: smashbook,
		note: false,
		noteDetails: "",
		links: true,
		github: "https://github.com/aluamark/smashbook",
		site: "https://smashbook.vercel.app/",
		skills: ["React", "Redux", "TailwindCSS", "Node", "Express", "NoSQL"],
	},
	{
		title: "Panahon",
		description: "Weather application built using Next.JS",
		image: panahon,
		note: false,
		noteDetails: "",
		links: true,
		github: "https://github.com/aluamark/panahon",
		site: "https://panahon.vercel.app/",
		skills: ["NextJS", "TailwindCSS"],
	},
	// {
	// 	title: "SmashFlix",
	// 	description:
	// 		"SmashFlix is a website where you can watch animes or movies online.",
	// 	image: smashflix,
	// 	note: false,
	// 	noteDetails: "",
	// 	links: true,
	// 	github: "https://github.com/aluamark/smashflix",
	// 	site: "https://smashflix.vercel.app/",
	// 	skills: ["React", "TailwindCSS"],
	// },
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
	// {
	// 	title: "Iskotrack",
	// 	description:
	// 		"Iskotrack is one of my personal projects. It is a webapp used to track the player's daily earnings and elo ranking in a Web3 game called Axie Infinity. It is built around Axie Infinity's API.",
	// 	image: iskotrack,
	// 	note: false,
	// 	noteDetails:
	// 		"The website is still up but not working as it should anymore due to Axie Infinity's API changes.",
	// 	links: true,
	// 	github: "https://github.com/aluamark/iskotrack",
	// 	site: "https://iskotrack.vercel.app",
	// 	skills: ["React", "Redux", "Node", "Express", "NoSQL"],
	// },
];
