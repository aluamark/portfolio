import React from "react";
import texture from "../../assets/texture.jpg";

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
		<div className="flex flex-col md:flex-row bg-neutral-300 text-zinc-800 my-3 rounded-xl">
			<div
				className="flex items-center md:w-2/5 bg-cover py-10 px-5 rounded-t-xl md:rounded-l-xl"
				style={{ backgroundImage: `url(${texture})` }}
			>
				<img
					src={project.image}
					alt="iskotrack"
					className="hover:scale-110 duration-300"
				/>
			</div>

			<div className="md:w-3/5 text-left p-5">
				<h3 className="text-xl font-bold">{project.title}</h3>

				<p className="py-3 text-xs">{formattedDescription}</p>

				{project.note && (
					<div className="pb-3 text-xs">
						<i className="font-semibold">**Note</i>
						<p>{project.noteDetails}</p>
					</div>
				)}

				{project.links && (
					<div className="flex pb-3">
						<a href={project.github} target="blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="w-8 h-8 fill-zinc-800 hover:fill-zinc-700"
							>
								<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
							</svg>
						</a>
						<a href={project.site} target="blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="w-8 h-8 fill-zinc-800 hover:fill-zinc-700"
							>
								<path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
							</svg>
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
	);
};

export default Project;
