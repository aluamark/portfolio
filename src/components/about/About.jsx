import React from "react";
import Box from "../Box";
import Skill from "./Skill";
import { devLangs, libraries, tools } from "./skillList";

const About = () => {
	return (
		<Box id="about" title="About.jsx" linkTo="#projects">
			<p className="w-11/12 md:w-3/4 mx-auto px-10 pb-8">
				Hey there! I'm an aspiring&nbsp;
				<span className="text-green-500">Software / Web Developer</span> and
				here are some of the tools and technologies that I'm familiar with.
			</p>
			<div className="flex flex-col xl:flex-row justify-around px-5 md:px-20 lg:px-20 xl:px-0">
				<div className="nm-inset-neutral-300-lg w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 pb-3">
					<h2 className="py-3 text-center">development languages</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
						{devLangs.map((skill) => {
							return (
								<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
							);
						})}
					</div>
				</div>
				<div className="nm-inset-neutral-300-lg w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 pb-3">
					<h2 className="py-3 text-center">libraries &amp; frameworks</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
						{libraries.map((skill) => {
							return (
								<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
							);
						})}
					</div>
				</div>
				<div className="nm-inset-neutral-300-lg w-full xl:mx-5 bg-neutral-300 text-zinc-900 rounded-xl mb-3 pb-3">
					<h2 className="py-3 text-center">tools &amp; platforms</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-1 text-xs p-1">
						{tools.map((skill) => {
							return (
								<Skill key={skill.id} skill={skill.skill} svg={skill.svg} />
							);
						})}
					</div>
				</div>
			</div>
		</Box>
	);
};

export default About;
