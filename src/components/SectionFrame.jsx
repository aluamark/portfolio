import React from "react";

const SectionFrame = ({ id, children }) => {
	return (
		<div
			id={id}
			className="relative max-w-screen-xl mx-auto w-full flex flex-col gap-10 pt-20"
		>
			{children}
		</div>
	);
};

export default SectionFrame;
