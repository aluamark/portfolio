import React from "react";
import { motion } from "framer-motion";

const DesktopFrame = ({ children }) => {
	return (
		<motion.div
			key="desktop"
			layout
			initial={{ opacity: 0, rotateY: 90 }}
			animate={{ opacity: 1, rotateY: 0 }}
			exit={{ opacity: 0, rotateY: -90 }}
			transition={{ duration: 0.5 }}
			className="w-full"
		>
			<div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[266px] sm:h-[316px] md:h-[456px] lg:h-[607px] w-11/12 md:w-10/12 xl:w-9/12 duration-500">
				<div className="flex justify-center rounded-lg overflow-y-auto h-[250px] sm:h-[300px] md:h-[440px] lg:h-[579px] bg-white duration-500">
					{children}
				</div>
			</div>

			<div class="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] md:h-[21px] w-full md:w-11/12 xl:w-10/12 duration-500">
				<div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800 duration-500"></div>
			</div>
		</motion.div>
	);
};

export default DesktopFrame;
