import React from "react";

const Skill = ({ skill, svg }) => {
	return (
		<div className="py-2 text-center">
			<img
				className="nm-flat-white w-10 h-10 mx-auto p-1 rounded object-contain hover:scale-110 duration-300"
				src={svg}
				alt="hello"
			/>
			<p className="pt-2">{skill}</p>
		</div>
	);
};

export default Skill;
