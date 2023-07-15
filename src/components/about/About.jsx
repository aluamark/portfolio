import React from "react";
import Box from "../Box";
import Skill from "./Skill";
import { devLangs, libraries, tools } from "./skillList";

const About = () => {
	return (
		<Box id="about" title="About.jsx" linkTo="#projects">
			<div className="flex flex-col gap-5 py-5">
				<p className="w-11/12 md:w-3/4 mx-auto px-10 py-3">
					Hey there! Here are some of the{" "}
					<span className="text-green-500">tools</span> and{" "}
					<span className="text-green-500">technologies</span> that I am
					familiar with.
				</p>
				<div className="flex flex-col xl:flex-row gap-y-5 justify-around md:px-5 lg:px-20 xl:px-0">
					<div className="nm-inset-neutral-300-lg flex flex-col gap-3 w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl py-5">
						<h2 className="text-center">development languages</h2>
						<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
							{devLangs.map((skill) => {
								return (
									<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
								);
							})}
						</div>
					</div>
					<div className="nm-inset-neutral-300-lg flex flex-col gap-3 w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl py-5">
						<h2 className="text-center">libraries &amp; frameworks</h2>
						<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
							{libraries.map((skill) => {
								return (
									<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
								);
							})}
						</div>
					</div>
					<div className="nm-inset-neutral-300-lg flex flex-col gap-3 w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl py-5">
						<h2 className="text-center">tools &amp; platforms</h2>
						<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
							{tools.map((skill) => {
								return (
									<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default About;
