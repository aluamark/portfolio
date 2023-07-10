import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	let menuRef = useRef();

	useEffect(() => {
		const closeDropdown = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setNavbar(false);
			}
		};

		document.addEventListener("mousedown", closeDropdown);

		return () => document.removeEventListener("mousedown", closeDropdown);
	}, []);

	return (
		<nav ref={menuRef} className="sticky top-0 z-50">
			<div className="absolute inset-x-0 top-0 bg-zinc-900 text-green-500 text-md hover:text-neutral-300 shadow-lg">
				<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between md:items-center md:flex w-full">
					<div className="flex justify-between w-full">
						<a
							href="#welcome"
							className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-300 font-extrabold py-5 px-5 cursor-pointer"
						>
							_<span className="text-neutral-300">alua</span>mark
						</a>
						<ul
							className="flex md:hidden items-center py-5 px-5 hover:bg-zinc-800 cursor-pointer"
							onClick={() => setNavbar(!navbar)}
						>
							<button className="text-gray-700 rounded-md outline-none">
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="fill-green-500 w-6 h-6"
										viewBox="0 0 320 512"
									>
										<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="fill-green-500 w-6 h-6"
										viewBox="0 0 448 512"
									>
										<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
									</svg>
								)}
							</button>
						</ul>
					</div>
					<div
						className={`bg-neutral-700 md:bg-zinc-900 md:block ${
							navbar ? "block" : "hidden"
						}`}
					>
						<ul className="md:flex justify-around divide-x divide-zinc-800/50">
							<NavLink navbar={navbar} setNavbar={setNavbar} title="about" />
							<NavLink navbar={navbar} setNavbar={setNavbar} title="projects" />
							<NavLink navbar={navbar} setNavbar={setNavbar} title="contact" />
							<NavLink navbar={navbar} setNavbar={setNavbar} title="resume" />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
