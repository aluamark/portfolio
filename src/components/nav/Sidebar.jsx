import React, { useState } from "react";
import OpenSidebarLink from "./OpenSidebarLink";
import CloseSidebarLink from "./CloseSidebarLink";
import SidebarDropdown from "./SidebarDropdown";
import react from "../../assets/React.svg";
import javascript from "../../assets/JavaScript.svg";

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex">
			<div className="sticky top-0 hidden lg:flex flex-none justify-center h-full w-[50px] z-50 text-neutral-300 bg-zinc-700">
				<div className="h-screen w-full">
					<div
						onClick={handleClick}
						className={`p-2 cursor-pointer ${
							isOpen && "border-x-2 border-l-white border-r-zinc-700"
						}`}
					>
						<div className="flex justify-center">
							<svg
								stroke="currentColor"
								fill="white"
								strokeWidth="0"
								viewBox="0 0 24 24"
								height="25"
								width="25"
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									isOpen ? "fill-white" : "fill-neutral-400 hover:fill-white"
								}`}
							>
								<path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="sticky top-0 hidden lg:flex flex-none h-full w-[250px] z-50 text-neutral-300 bg-zinc-800">
					<div className="h-screen w-full text-sm">
						<div className="flex justify-between items-center px-5 py-2.5">
							<span className="text-neutral-300 text-xs">EXPLORER</span>
							<div
								onClick={handleClick}
								className="hover:bg-zinc-700 py-0.5 px-1 rounded cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="m9 6-6 6 6 6" />
									<path d="M3 12h14" />
									<path d="M21 19V5" />
								</svg>
							</div>
						</div>

						<CloseSidebarLink
							title="PORTFOLIO"
							fontStyle="font-semibold text-neutral-200"
						/>
						<div className="px-3">
							<OpenSidebarLink title=".vercel" fontStyle="text-neutral-400" />
							<OpenSidebarLink title="dist" fontStyle="text-neutral-400" />
							<OpenSidebarLink
								title="node_modules"
								fontStyle="text-neutral-400"
							/>
							<OpenSidebarLink title="public" fontStyle="text-neutral-400" />
							<CloseSidebarLink title="src" fontStyle="text-neutral-400" />
						</div>

						<div className="px-6">
							<OpenSidebarLink title="assets" fontStyle="text-neutral-400" />
							<CloseSidebarLink
								title="components"
								fontStyle="text-neutral-200"
							/>
						</div>
						<div className="pl-9">
							<SidebarDropdown
								title="welcome"
								componentTitle="Welcome.jsx"
								link="#welcome"
							/>
							<SidebarDropdown
								title="about"
								componentTitle="About.jsx"
								link="#about"
							/>
							<SidebarDropdown
								title="projects"
								componentTitle="Projects.jsx"
								link="#projects"
							/>
							<SidebarDropdown
								title="contact"
								componentTitle="Contact.jsx"
								link="#contact"
							/>
							<SidebarDropdown
								title="resume"
								componentTitle="Resume.jsx"
								link="#resume"
							/>
						</div>
						<div className="px-6">
							<div className="flex items-center gap-1 py-0.5">
								<img src={react} alt="react-icon" className="w-3 h-3" />
								<span className="text-neutral-400">App.jsx</span>
							</div>
							<div className="flex items-center gap-1 py-0.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									strokeWidth="2"
									className="w-3 h-3 stroke-blue-500"
								>
									<line x1="4" x2="20" y1="9" y2="9" />
									<line x1="4" x2="20" y1="15" y2="15" />
									<line x1="10" x2="8" y1="3" y2="21" />
									<line x1="16" x2="14" y1="3" y2="21" />
								</svg>
								<span className="text-neutral-400">index.css</span>
							</div>
							<div className="flex items-center gap-1 py-0.5">
								<img src={javascript} alt="js-icon" className="w-3 h-3" />
								<span className="text-neutral-400">index.js</span>
							</div>
						</div>
						<div className="px-3">
							<div className="flex items-center gap-1 py-0.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									strokeWidth="2"
									className="w-3 h-3 stroke-yellow-300 fill-none"
								>
									<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
									<path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
								</svg>
								<span className="text-neutral-400">package-lock.json</span>
							</div>
							<div className="flex items-center gap-1 py-0.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									strokeWidth="2"
									className="w-3 h-3 stroke-yellow-300 fill-none"
								>
									<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
									<path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
								</svg>
								<span className="text-neutral-400">package.json</span>
							</div>
							<div className="flex items-center gap-1 py-0.5">
								<img src={javascript} alt="js-icon" className="w-3 h-3" />
								<span className="text-neutral-400">tailwind.config.js</span>
							</div>
						</div>
					</div>
				</div>
			)}

			{children}
		</div>
	);
};

export default Sidebar;
