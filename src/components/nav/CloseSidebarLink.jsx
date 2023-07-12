import React from "react";

const CloseSidebarLink = ({ title, fontStyle }) => {
	return (
		<div className="flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
			>
				<path d="m6 9 6 6 6-6" />
			</svg>
			<span className={`${fontStyle}`}>{title}</span>
		</div>
	);
};

export default CloseSidebarLink;
