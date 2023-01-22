import React from "react";

const SectionHeader = ({ title }) => {
	return (
		<section className="tracking-wide shadow-xl pb-3">
			<div className="flex absolute top-4 left-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className="fill-red-700 hover:fill-red-500 w-5 h-5 mr-1"
				>
					<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className="fill-yellow-700 hover:fill-yellow-500 w-5 h-5 mr-1"
				>
					<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className="fill-green-700 hover:fill-green-500 w-5 h-5"
				>
					<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
				</svg>
			</div>
			<div className="text-neutral-300">
				<h1 className="text-center hover:text-green-500">{title}</h1>
			</div>
		</section>
	);
};

export default SectionHeader;
