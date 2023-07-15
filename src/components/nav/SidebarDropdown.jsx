import React, { useState } from "react";
import react from "../../assets/skills/React.svg";

const SidebarDropdown = ({ title, componentTitle, link }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex flex-col text-sm">
			<div
				onClick={handleClick}
				className="flex items-center hover:bg-zinc-700 cursor-pointer"
			>
				{isOpen ? (
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
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				)}
				<span className="text-neutral-200">{title}</span>
			</div>
			{isOpen && (
				<a
					href={link}
					className="hover:bg-zinc-700 cursor-pointer"
					aria-label={title}
				>
					<div className="flex items-center gap-1 px-3 py-1">
						<img src={react} alt="react-icon" className="w-3 h-3" />
						<span className="text-green-500">{componentTitle}</span>
					</div>
				</a>
			)}
		</div>
	);
};

export default SidebarDropdown;
