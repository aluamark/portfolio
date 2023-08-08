import React from "react";
import CodeSVG from "../svg/CodeSVG";
import Code2SVG from "../svg/Code2SVG";

const Footer = () => {
	return (
		<div className="bg-black text-neutral-300 py-5 mt-10">
			<div className="max-w-screen-lg mx-auto flex justify-center items-center gap-3">
				<CodeSVG />
				<span className="text-neutral-300 hover:text-white">_aluamark</span>
				<Code2SVG />
			</div>
		</div>
	);
};

export default Footer;
