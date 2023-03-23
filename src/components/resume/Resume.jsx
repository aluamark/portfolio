import React from "react";
import SectionHeader from "../SectionHeader";

const Resume = () => {
	return (
		<div id="resume" className="bg-neutral-300 py-24 md:px-5">
			<div className="flex flex-col bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl">
				<SectionHeader title="RESUME" />

				<div className="flex mx-auto pt-8 pb-5 ">
					<a
						className="flex items-center bg-green-500 hover:bg-green-300 duration-300 px-5 py-3 rounded shadow-xl"
						href="https://drive.google.com/file/d/1ITVDJKye-udRW7LVDh6VvgA45sOaG_60/view?usp=share_link"
						target="blank"
					>
						<p className="font-bold text-sm sm:text-md">
							View / Download my resume
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="ml-2 w-7 h-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resume;
