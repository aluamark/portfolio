import React from "react";
import ProjectDemo from "./ProjectDemo";
import GradientLink from "../GradientLink";
import ExternalLinkSVG from "../svg/ExternalLinkSVG";
import GitHubSVG from "../svg/GitHubSVG";

const Project = ({ project }) => {
	return (
		<div className="flex-none flex flex-col gap-5 text-left w-full">
			<div className="flex flex-col gap-2.5 px-1 md:px-5" data-aos="fade-right">
				<span className="text-xl font-bold underline underline-offset-8">
					{project.title}
				</span>
				<span className="font-semibold">{project.shortDescription}</span>
			</div>
			<ProjectDemo
				title={project.title}
				site={project.site}
				image={project.image}
			/>
			{project.links && (
				<div className="flex flex-col gap-5 text-sm px-1 md:px-5">
					{project.note && (
						<span className="italic">{project.noteDetails}</span>
					)}
					<div className="flex gap-1">
						<GradientLink
							linkTo={project.github}
							title="GitHub"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubSVG />
						</GradientLink>
						<GradientLink
							linkTo={project.github}
							title="Live Demo"
							target="_blank"
							rel="noreferrer"
						>
							<ExternalLinkSVG />
						</GradientLink>
					</div>
				</div>
			)}

			<div className="flex flex-wrap gap-1 px-1 md:px-5">
				{project.skills.map((skill) => {
					return (
						<span
							key={skill}
							className="flex py-1 px-3 bg-white text-sm font-semibold border rounded-full shadow"
						>
							{skill}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
