import React from "react";

const ScrollDown = ({ linkTo }) => {
	return (
		<div className="flex justify-center pt-5">
			<a href={linkTo} aria-label={linkTo}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="w-5 h-5 fill-neutral-300 hover:fill-green-500 duration-300 animate-bounce"
				>
					<path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
				</svg>
			</a>
		</div>
	);
};

export default ScrollDown;
