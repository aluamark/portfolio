import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/nav/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
	const [run, setRun] = useState(false);
	const welcomeRef = useRef(null);

	useEffect(() => {
		if (run) {
			setTimeout(() => {
				if (welcomeRef.current) {
					welcomeRef.current.scrollIntoView({ behavior: "smooth" });
				}
			}, 1000);
		}
	}, [run]);

	return (
		<div className="font-mono select-none">
			<ScrollToTop
				top={250}
				component={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="p-2 bg-zinc-800 fill-neutral-300 bg-none hover:bg-green-500  hover:fill-zinc-800 hover:-translate-y-1 duration-500 rounded border-solid border-2 border-green-500"
						width="50"
						height="50"
					>
						<path d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2v77l-144 84V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v56 32 24c0 13.3 10.7 24 24 24s24-10.7 24-24v-8H192v32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12v16c0 8.8 7.2 16 16 16h96V448c0-8.8 7.2-16 16-16s16 7.2 16 16v64h96c8.8 0 16-7.2 16-16V480c0-4.6-2-9-5.5-12L320 416.7V384H464v8c0 13.3 10.7 24 24 24s24-10.7 24-24V368 336 280c0-13.3-10.7-24-24-24s-24 10.7-24 24v18.8l-144-84v-77c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7z" />
					</svg>
				}
				className="bg-transparent shadow-none z-100"
			/>
			<Home run={run} setRun={setRun} />
			{run && (
				<div className="bg-zinc-900">
					<Navbar />
					<Sidebar>
						<div className="flex flex-col w-full">
							<Welcome welcomeRef={welcomeRef} />
							<About />
							<Projects />
							<Contact />
							<Resume />
							<Footer />
						</div>
					</Sidebar>
				</div>
			)}
		</div>
	);
};

export default App;
