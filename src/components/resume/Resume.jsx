import React from "react";
import Box from "../Box";

const Resume = () => {
	return (
		<Box id="resume" title="Resume.jsx">
			<div className="flex justify-center py-20">
				<a
					className="flex items-center bg-green-500 hover:bg-green-300 duration-300 px-5 py-3 rounded shadow-xl text-zinc-900 text-sm sm:text-md font-semibold"
					href="https://drive.google.com/file/d/1TUGBKIBE6sGY0gj6pD8hXuctHAL-6wr2/view?usp=sharing"
					target="blank"
				>
					View / Download my resume
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
		</Box>
	);
};

export default Resume;
