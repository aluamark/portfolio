import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DesktopFrame from "./DesktopFrame";
import MobileFrame from "./MobileFrame";

const ProjectDemo = ({ title, site, image }) => {
	const [screen, setScreen] = useState(getScreenSize());

	function getScreenSize() {
		return window.innerWidth <= 976 ? "mobile" : "desktop";
	}

	useEffect(() => {
		function handleResize() {
			setScreen(getScreenSize());
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className="flex flex-col gap-5 w-full justify-center items-center text-neutral-300"
			data-aos="fade-up"
		>
			{site ? (
				<AnimatePresence mode="wait">
					{screen === "desktop" ? (
						<DesktopFrame>
							<motion.iframe
								key="desktop"
								src={site}
								layout
								style={{ width: "100%" }}
								height="100%"
								frameBorder="0"
								className="rounded-lg px-1 md:px-0"
								initial={{ opacity: 0, rotateY: 90 }}
								animate={{ opacity: 1, rotateY: 0 }}
								exit={{ opacity: 0, rotateY: -90 }}
								transition={{ duration: 0.5 }}
							></motion.iframe>
						</DesktopFrame>
					) : (
						<MobileFrame>
							<motion.iframe
								key="mobile"
								src={site}
								layout
								style={{ width: "100%" }}
								height="100%"
								frameBorder="0"
								className="rounded-lg px-1 md:px-0"
								initial={{ opacity: 0, rotateY: 90 }}
								animate={{ opacity: 1, rotateY: 0 }}
								exit={{ opacity: 0, rotateY: -90 }}
								transition={{ duration: 0.5 }}
							></motion.iframe>
						</MobileFrame>
					)}
				</AnimatePresence>
			) : (
				<DesktopFrame>
					<img
						src={image}
						alt={title}
						className="rounded-lg px-1 md:px-0 object-contain"
					/>
				</DesktopFrame>
			)}

			{site && (
				<div className="hidden lg:flex justify-center items-center gap-5">
					<button onClick={() => setScreen("desktop")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`hover:opacity-80 duration-300 ${
								screen === "desktop" ? "stroke-black" : "stroke-zinc-500"
							}`}
						>
							<rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
							<line x1="2" x2="22" y1="20" y2="20" />
						</svg>
					</button>
					<button onClick={() => setScreen("mobile")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 24 24"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`hover:opacity-80 duration-300 ${
								screen === "mobile" ? "stroke-black" : "stroke-zinc-500"
							}`}
						>
							<rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
							<path d="M12 18h.01" />
						</svg>
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectDemo;
