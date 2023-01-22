import React from "react";
import SectionHeader from "../SectionHeader";
import ScrollDown from "../ScrollDown";
import Skill from "./Skill";

import html from "../../assets/HTML.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JavaScript.svg";
import python from "../../assets/Python.svg";
import java from "../../assets/Java.svg";
import mysql from "../../assets/MySQL.svg";
import mongodb from "../../assets/MongoDB.svg";
import firebase from "../../assets/Firebase.svg";
import react from "../../assets/React.svg";
import redux from "../../assets/Redux.svg";
import node from "../../assets/Node.svg";
import express from "../../assets/Express.svg";
import tailwindcss from "../../assets/TailwindCSS.svg";
import bootstrap from "../../assets/Bootstrap.svg";
import git from "../../assets/Git.svg";
import github from "../../assets/Github.svg";
import postman from "../../assets/Postman.svg";
import heroku from "../../assets/Heroku.svg";
import vercel from "../../assets/Vercel.svg";

const About = () => {
	const devLangs = [
		{
			id: 0,
			svg: html,
			skill: "HTML",
		},
		{
			id: 1,
			svg: css,
			skill: "CSS",
		},
		{
			id: 2,
			svg: javascript,
			skill: "JavaScript",
		},
		{
			id: 3,
			svg: python,
			skill: "Python",
		},
		{
			id: 4,
			svg: java,
			skill: "Java",
		},
	];

	const libraries = [
		{
			id: 1,
			svg: react,
			skill: "React",
		},
		{
			id: 2,
			svg: redux,
			skill: "Redux",
		},
		{
			id: 3,
			svg: node,
			skill: "Node",
		},
		{
			id: 4,
			svg: express,
			skill: "Express",
		},
		{
			id: 5,
			svg: tailwindcss,
			skill: "Tailwind",
		},
		{
			id: 6,
			svg: bootstrap,
			skill: "Bootstrap",
		},
	];

	const tools = [
		{
			id: 0,
			svg: mysql,
			skill: "MySQL",
		},
		{
			id: 1,
			svg: mongodb,
			skill: "MongoDB",
		},
		{
			id: 2,
			svg: firebase,
			skill: "Firebase",
		},
		{
			id: 3,
			svg: git,
			skill: "Git",
		},
		{
			id: 4,
			svg: github,
			skill: "Github",
		},
		{
			id: 5,
			svg: postman,
			skill: "Postman",
		},
		{
			id: 6,
			svg: heroku,
			skill: "Heroku",
		},
		{
			id: 7,
			svg: vercel,
			skill: "Vercel",
		},
	];

	return (
		<div id="about" className="bg-neutral-300 pt-24 md:px-5">
			<div className="mx-auto">
				<div
					className="bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl"
					data-aos="fade-up"
				>
					<SectionHeader title="ABOUT" />

					<div className="text-neutral-300 text-md text-center pb-5 pt-8">
						<p className="w-11/12 md:w-3/4 mx-auto px-10 pb-8">
							Hey there! I'm an aspiring&nbsp;
							<span className="text-green-500">
								Software / Web Developer
							</span>{" "}
							and here are some of the tools and technologies that I'm familiar
							with.
						</p>
						<div className="flex flex-col lg:flex-row justify-around">
							<div className="nm-inset-neutral-300-lg w-3/4 mx-auto lg:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 px-5 pb-3">
								<h2 className="pt-3 text-center">development languages</h2>
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-1 text-xs p-2">
									{devLangs.map((skill) => {
										return (
											<Skill
												key={skill.id}
												skill={skill.skill}
												svg={skill.svg}
											/>
										);
									})}
								</div>
							</div>
							<div className="nm-inset-neutral-300-lg w-3/4 mx-auto lg:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 px-5 pb-3">
								<h2 className="pt-3 text-center">libraries &amp; frameworks</h2>
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-1 text-xs p-2">
									{libraries.map((skill) => {
										return (
											<Skill
												key={skill.id}
												skill={skill.skill}
												svg={skill.svg}
											/>
										);
									})}
								</div>
							</div>
							<div className="nm-inset-neutral-300-lg w-3/4 mx-auto lg:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 px-5 pb-3">
								<h2 className="pt-3 text-center">tools &amp; platforms</h2>
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-1 text-xs p-2">
									{tools.map((skill) => {
										return (
											<Skill
												key={skill.id}
												skill={skill.skill}
												svg={skill.svg}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				<ScrollDown linkTo="#projects" />
			</div>
		</div>
	);
};

export default About;
