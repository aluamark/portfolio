import React from "react";
import Skill from "./Skill";

const Category = ({ title, skills, fadeDirection }) => {
	return (
		<div
			className="relative nm-flat-neutral-50-lg border flex flex-col gap-3 w-full xl:mx-5 text-zinc-900 rounded-xl py-5 duration-500"
			data-aos={fadeDirection}
		>
			<h2 className="absolute -top-10 left-1/2 -translate-x-1/2 nm-flat-neutral-50 rounded border text-center p-3 font-semibold text-sm w-2/3 md:w-10/12 duration-500">
				{title}
			</h2>
			<div className="grid grid-cols-3 gap-1 text-xs p-1 content-center h-72">
				{skills.map((skill) => {
					return <Skill key={skill.id} skill={skill.skill} svg={skill.svg} />;
				})}
			</div>
		</div>
	);
};

export default Category;
