import React from "react";
import SectionHeader from "./SectionHeader";
import ScrollDown from "./ScrollDown";

const Box = ({ id, title, linkTo, children }) => {
	return (
		<div
			id={id}
			className="relative min-h-screen flex justify-center items-center md:px-5 py-20"
		>
			<div
				className="w-full bg-zinc-800 p-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl"
				data-aos="fade-up"
			>
				<SectionHeader title={title} />

				<div className="text-neutral-300 text-center pt-8 pb-5">{children}</div>
			</div>
			{id !== "resume" && <ScrollDown linkTo={linkTo} />}
		</div>
	);
};

export default Box;
