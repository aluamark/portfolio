import React from "react";

const SectionHeader = ({ title }) => {
	return (
		<>
			<div
				className="bg-neutral-300 w-40 h-10 absolute skew-x-12 md:mx-5"
				data-aos="fade-up"
			></div>
			<h2
				className="relative text-4xl font-bold px-1 md:px-5"
				data-aos="fade-right"
			>
				{title}
			</h2>
		</>
	);
};

export default SectionHeader;
