import React from "react";
import SectionHeader from "../SectionHeader";
import ScrollDown from "../ScrollDown";
import Project from "./Project";
import { projects } from "./projectList";

const Projects = () => {
	return (
		<div id="projects" className="pt-24 md:px-5">
			<div className="bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl">
				<SectionHeader title="Projects.jsx" />

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
