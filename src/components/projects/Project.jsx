import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDemo from "./ProjectDemo";
import GradientLink from "../GradientLink";
import ExternalLinkSVG from "../svg/ExternalLinkSVG";
import GitHubSVG from "../svg/GitHubSVG";
import AlertSVG from "../svg/AlertSVG";

const Project = ({ project }) => {
	const [warningClicked, setWarningClicked] = useState(false);
	console.log(warningClicked);

	return (
		<div className="flex-none flex flex-col gap-5 text-left w-full">
			<div className="flex flex-col gap-2.5 px-5" data-aos="fade-right">
				<span className="text-xl font-bold underline underline-offset-8">
					{project.title}
				</span>
				<span className="font-semibold">{project.shortDescription}</span>
			</div>
			<div className="flex justify-between px-1 md:px-5 text-sm">
				{project.login && (
					<div className="flex flex-col select-text">
						<span className="font-semibold">Demo account</span>
						<div>
							<span className="font-semibold">Email:</span> {project.email}
						</div>
						<div>
							<span className="font-semibold">Password:</span>{" "}
							{project.password}
						</div>
					</div>
				)}
				{project.note && (
					<div className="relative">
						<button
							onClick={() => setWarningClicked(!warningClicked)}
							className="flex flex-col items-center font-semibold"
						>
							Login Warning
							<AlertSVG className="w-10 h-10 stroke-red-500 animate-pulse" />
						</button>

						<AnimatePresence>
							{warningClicked && (
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
									className="absolute -bottom-40 right-0 origin-top-right w-60 flex flex-col gap-3 bg-white border rounded p-3 italic text-sm font-semibold z-10"
								>
									<p>{project.noteDetails}</p>
									<div className="flex">
										<a
											href={project.site}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-1 text-blue-500 hover:underline"
										>
											Live Demo <ExternalLinkSVG />
										</a>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)}
			</div>
			<ProjectDemo
				title={project.title}
				site={project.site}
				image={project.image}
			/>
			{project.links && (
				<div className="flex flex-col gap-5 px-5">
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
							linkTo={project.site}
							title="Live Demo"
							target="_blank"
							rel="noreferrer"
						>
							<ExternalLinkSVG />
						</GradientLink>
					</div>
				</div>
			)}

			<div className="flex flex-wrap gap-1 px-5">
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
