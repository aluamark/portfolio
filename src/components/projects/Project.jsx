import React from "react";
import ImageCarousel from "./ImageCarousel";

const Project = ({ project }) => {
	const formattedDescription = project.description
		.split("\n")
		.map((line, index) => (
			<React.Fragment key={index}>
				&bull; {line}
				<br />
			</React.Fragment>
		));
	return (
		<div className="flex flex-col text-zinc-800 text-left py-10">
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2.5 md:px-5">
				<span className="text-green-500 text-xl font-bold underline underline-offset-8">
					{project.title}
				</span>
				<span className="text-green-500 text-sm">
					{project.shortDescription}
				</span>
			</div>

			<div className="flex flex-col gap-5 md:px-5">
				<div className="flex">
					{project.slides ? (
						<ImageCarousel slides={project.slides} />
					) : (
						<img
							src={project.image}
							alt={project.title}
							className="rounded-lg pt-5"
						/>
					)}
				</div>

				<div className="flex flex-col gap-5 text-left">
					<div className="bg-neutral-300 p-5 rounded-lg">
						<p className="text-sm">{formattedDescription}</p>

						{project.note && (
							<div className="pt-3 text-xs">
								<i className="font-semibold">**Note</i>
								<p>{project.noteDetails}</p>
							</div>
						)}
					</div>
					<div>
						{project.links && (
							<div className="flex gap-3 pb-3 text-green-500 text-xs">
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									aria-label={project.title + "-github"}
									className="flex items-center gap-1 hover:text-green-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
										<path d="M9 18c-4.51 2-5-2-7-2" />
									</svg>
									Github
								</a>
								<a
									href={project.site}
									target="_blank"
									rel="noreferrer"
									aria-label={project.title}
									className="flex items-center gap-1 hover:text-green-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" x2="21" y1="14" y2="3" />
									</svg>
									Live Demo
								</a>
							</div>
						)}

						<div className="flex flex-wrap gap-1">
							{project.skills.map((skill) => {
								return (
									<p
										key={skill}
										className="flex py-1 px-3 bg-green-500 font-bold text-xs rounded"
									>
										{skill}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
