import React from "react";

const Skill = ({ skill, svg }) => {
	return (
		<div className="py-2 text-center hover:scale-110 duration-300">
			<img
				className="nm-flat-neutral-300-lg w-10 h-10 mx-auto p-1 rounded object-contain"
				src={svg}
				alt="hello"
			/>
			<p className="pt-2">{skill}</p>
		</div>
	);
};

export default Skill;
