import React from "react";

const NavLinks = ({ title, navbar, setNavbar }) => {
	return (
		<a
			href={"#" + title}
			aria-label={title}
			className="flex w-full justify-center hover:text-green-500 hover:bg-zinc-800 duration-300 py-5 px-3 cursor-pointer"
			onClick={() => setNavbar(!navbar)}
		>
			{title}
		</a>
	);
};

export default NavLinks;
