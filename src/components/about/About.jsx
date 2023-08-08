import React from "react";
import avatar from "../../assets/avatar.png";
import { devLangs, libraries, tools } from "./skillList";
import SectionFrame from "../SectionFrame";
import SectionHeader from "../SectionHeader";
import Category from "./Category";

const About = () => {
	return (
		<SectionFrame id="about">
			<SectionHeader title="About" />

			<div className="relative flex justify-center w-full overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2">
					<h1 className="text-5xl md:text-7xl lg:text-9xl text-neutral-100 font-extrabold tracking-widest duration-1000">
						TECHNOLOGIES
					</h1>
				</div>
				<img
					src={avatar}
					alt="avatar"
					className="relative object-contain"
					data-aos="fade-up"
				/>
			</div>

			<div className="flex flex-col lg:flex-row gap-10 justify-around p-5 md:px-40 lg:px-5 overflow-hidden duration-500">
				<Category
					title="Development Languages"
					skills={devLangs}
					fadeDirection="fade-right"
				/>
				<Category
					title="Libraries &amp; Frameworks"
					skills={libraries}
					fadeDirection="fade-up"
				/>
				<Category
					title="Tools &amp; Platforms"
					skills={tools}
					fadeDirection="fade-left"
				/>
			</div>
		</SectionFrame>
	);
};

export default About;
