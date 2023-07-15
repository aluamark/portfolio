import React from "react";

const SidebarFile = ({ title, children }) => {
	return (
		<div className="flex items-center gap-1 py-0.5">
			{children}
			<span className="text-neutral-400">{title}</span>
		</div>
	);
};

export default SidebarFile;
