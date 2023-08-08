import React from "react";

const GradientLink = ({ linkTo, title, target, rel, children }) => {
	return (
		<a
			href={linkTo}
			target={target}
			rel={rel}
			className="flex justify-center items-center gap-1 px-5 py-3 text-white font-semibold rounded transition-all duration-500 bg-gradient-to-tl from-zinc-900 via-neutral-500 to-zinc-700 bg-size-200 bg-pos-0 hover:bg-pos-100"
		>
			{children}
			{title}
		</a>
	);
};

export default GradientLink;
