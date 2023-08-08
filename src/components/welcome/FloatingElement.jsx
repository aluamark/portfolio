import { motion } from "framer-motion";

const FloatingElement = ({ xPosition, yPosition, delay, children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			drag
			dragConstraints={{
				top: -50,
				left: -50,
				right: 50,
				bottom: 50,
			}}
			className="cursor-grab"
		>
			<motion.div
				className={`flex justify-center items-center bg-white border-4 border-zinc-500 rounded-full shadow-xl p-3 w-16 xl:w-20 h-16 xl:h-20 z-0 duration-300`}
				initial={{ x: 0, y: 0 }}
				animate={{ x: xPosition, y: yPosition }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default FloatingElement;
