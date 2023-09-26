import React from "react";

const SectionHeader = ({ title }) => {
	return (
		<>
			<div
				className="bg-neutral-300 w-36 md:w-44 h-8 md:h-10 absolute skew-x-12 md:mx-5"
				data-aos="fade-up"
			></div>
			<h2
				className="relative text-2xl md:text-4xl font-bold px-5 md:px-10"
				data-aos="fade-right"
			>
				{title}
			</h2>
		</>
	);
};

export default SectionHeader;
