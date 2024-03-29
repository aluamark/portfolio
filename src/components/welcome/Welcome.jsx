import React from "react";
import { motion } from "framer-motion";
import GradientLink from "../GradientLink";
import FloatingElement from "./FloatingElement";

import HtmlSVG from "../svg/HtmlSVG";
import JavaScriptSVG from "../svg/JavaScriptSVG";
import MongoSVG from "../svg/MongoSVG";
import NextJsSVG from "../svg/NextJsSVG";
import NodeJsSVG from "../svg/NodeJsSVG";
import ReactJsSVG from "../svg/ReactJsSVG";
import ReduxSVG from "../svg/ReduxSVG";
import TailwindSVG from "../svg/TailwindSVG";

const Welcome = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="welcome"
			className="relative md:min-h-screen md:h-screen mx-auto w-full flex justify-center items-center pt-20 px-5"
		>
			<div className="absolute inset-x-0 top-5 left-5 py-20 md:py-40 lg:py-10 xl:py-0 overflow-hidden">
				<h1 className="text-6xl md:text-9xl lg:text-[200px] xl:text-[300px] text-neutral-100 font-extrabold duration-1000">
					PORTFOLIO
				</h1>
			</div>
			<div className="absolute inset-x-0 bottom-0 right-5 py-20 md:py-40 lg:py-10 xl:py-0 overflow-hidden">
				<h1 className="text-6xl md:text-9xl lg:text-[200px] xl:text-[300px] text-neutral-100 font-extrabold transform scale-x-[-1] duration-1000">
					PORTFOLIO
				</h1>
			</div>
			<div className="relative h-full flex items-center justify-center">
				<div className="grid grid-cols-4 justify-items-center content-around w-full">
					<div className="col-start-2 col-span-1">
						<FloatingElement xPosition={0} yPosition={-20} delay={0.2}>
							<HtmlSVG />
						</FloatingElement>
					</div>
					<div className="col-start-3 col-span-1">
						<FloatingElement xPosition={0} yPosition={-20} delay={0.3}>
							<ReactJsSVG />
						</FloatingElement>
					</div>
					<div className="col-start-1 col-span-1 md:col-span-2">
						<FloatingElement xPosition={-20} yPosition={0} delay={0.1}>
							<JavaScriptSVG />
						</FloatingElement>
					</div>
					<div className="col-start-4 col-span-1 md:col-span-2">
						<FloatingElement xPosition={20} yPosition={0} delay={0.4}>
							<ReduxSVG />
						</FloatingElement>
					</div>

					<div className="col-span-4 py-5">
						<div className="flex flex-col gap-2.5 md:gap-5 w-full">
							<h2 className="text-lg md:text-3xl text-center font-semibold">
								Hello there!
							</h2>

							<p className="text-center text-transparent text-3xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500">
								I'm Mark William Alua.
							</p>

							<p className="w-2/3 lg:w-1/2 mx-auto text-center italic text-sm md:text-base">
								Welcome to my digital playground where I turn innovative ideas
								into captivating web experiences, one line of code at a time.
							</p>

							<div className="flex justify-center gap-5 w-full pt-2.5 md:pt-0">
								<GradientLink linkTo="#projects" title="View My Projects" />
								<GradientLink linkTo="#contact" title="Contact Me" />
							</div>
						</div>
					</div>
					<div className="col-span-1 md:col-span-2">
						<FloatingElement xPosition={-20} yPosition={0} delay={0.8}>
							<NodeJsSVG />
						</FloatingElement>
					</div>

					<div className="col-start-4 col-span-1 md:col-span-2">
						<FloatingElement xPosition={20} yPosition={0} delay={0.5}>
							<NextJsSVG />
						</FloatingElement>
					</div>
					<div className="col-start-2 col-span-1">
						<FloatingElement xPosition={0} yPosition={20} delay={0.7}>
							<TailwindSVG />
						</FloatingElement>
					</div>
					<div className="col-start-3 col-span-1">
						<FloatingElement xPosition={0} yPosition={20} delay={0.6}>
							<MongoSVG />
						</FloatingElement>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Welcome;
