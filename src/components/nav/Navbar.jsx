import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarToggle from "./NavbarToggle";
import navLinks from "./navLinks";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			const sections = ["about", "projects", "contact"];
			let activeSectionId = "";
			const threshold = 0.9;

			for (let i = sections.length - 1; i >= 0; i--) {
				const sectionId = sections[i];
				const section = document.getElementById(sectionId);
				const rect = section.getBoundingClientRect();
				const visibleHeight = rect.height * threshold;
				if (
					rect.top >= -visibleHeight &&
					rect.bottom <= window.innerHeight + visibleHeight
				) {
					activeSectionId = sectionId;
					break;
				}
			}
			setActiveSection(activeSectionId);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className="z-50 fixed top-0 w-full bg-gradient-to-b from-zinc-800 to-zinc-600 text-neutral-300">
			<div
				className={`max-w-screen-xl mx-auto flex justify-between items-center w-full h-14 px-5 md:px-10 transition duration-500 font-semibold ${
					scrolled ? "shadow-xl" : ""
				}`}
			>
				<a href="#welcome" className="text-white px-3 py-1.5 border-2 rounded hover:bg-white hover:text-black duration-300 hover:border-white">
					ALUA
				</a>

				<ul className="hidden md:flex justify-end items-center gap-5">
					{navLinks.map((link) => (
						<li key={link.title}>
							<a
								href={link.linkTo}
								className={`relative rounded-full px-3 py-1.5 text-white transition duration-300 ${
									activeSection === link.section && scrolled
										? "text-black"
										: "hover:opacity-50"
								}`}
							>
								{activeSection === link.section && (
									<motion.div
										layoutId="active-link"
										className="bg-white absolute inset-0 rounded-full"
										transition={{ type: "spring", duration: 0.5 }}
									/>
								)}
								<span className="relative z-10">{link.title}</span>
							</a>
						</li>
					))}
				</ul>

				<div
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden cursor-pointer"
				>
					<NavbarToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				</div>
			</div>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						className="md:hidden fixed w-full flex flex-col gap-1.5 p-5 bg-zinc-600 origin-top-right"
					>
						<ul className="flex flex-col gap-5">
							{navLinks.map((link) => (
								<li key={link.title}>
									<a
										href={link.linkTo}
										onClick={() => setIsMenuOpen(false)}
										className={`relative rounded-full px-3 py-1.5 text-white transition duration-300 ${
											activeSection === link.section && scrolled
												? "text-black"
												: "hover:opacity-50"
										}`}
									>
										{activeSection === link.section && (
											<motion.div
												layoutId="active-link"
												className="bg-white absolute inset-0 rounded-full"
												transition={{ type: "spring", duration: 0.1 }}
											/>
										)}
										<span className="relative z-10">{link.title}</span>
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
