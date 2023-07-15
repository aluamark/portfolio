import React from "react";
import Box from "../Box";
import Project from "./Project";
import { projects } from "./projectList";

const Projects = () => {
	return (
		<Box id="projects" title="Projects" linkTo="#contact">
			{projects.map((project) => {
				return <Project key={project.title} project={project} />;
			})}
		</Box>
	);
};

export default Projects;
