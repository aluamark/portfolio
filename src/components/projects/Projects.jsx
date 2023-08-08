import React from "react";
import SectionFrame from "../SectionFrame";
import SectionHeader from "../SectionHeader";
import Project from "./Project";
import { projects } from "./projectList";

const Projects = () => {
	return (
		<SectionFrame id="projects">
			<SectionHeader title="Projects" />
			<div className="flex flex-col gap-10">
				{projects.map((project) => {
					return <Project key={project.title} project={project} />;
				})}
			</div>
		</SectionFrame>
	);
};

export default Projects;
