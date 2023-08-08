import React from "react";
import { motion } from "framer-motion";

const MobileFrame = ({ children }) => {
	return (
		<motion.div
			key="mobile"
			layout
			initial={{ opacity: 0, rotateY: 90 }}
			animate={{ opacity: 1, rotateY: 0 }}
			exit={{ opacity: 0, rotateY: -90 }}
			transition={{ duration: 0.5 }}
			className="relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[628px] w-[318px]"
		>
			<div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
			<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
			<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
			<div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
			<div className="rounded-[2rem] overflow-y-auto w-full h-[600px] bg-white">
				{children}
			</div>
		</motion.div>
	);
};

export default MobileFrame;
