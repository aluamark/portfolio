import employx from "../../assets/employx.webp";
import employx1 from "../../assets/employx/employx-1.png";
import employx2 from "../../assets/employx/employx-2.png";
import employx3 from "../../assets/employx/employx-3.png";
import employx4 from "../../assets/employx/employx-4.png";
import employx5 from "../../assets/employx/employx-5.png";
import employx6 from "../../assets/employx/employx-6.png";
import employx7 from "../../assets/employx/employx-7.png";
import employx8 from "../../assets/employx/employx-8.png";

import sociable from "../../assets/sociable.webp";
import sociable1 from "../../assets/sociable/sociable-1.png";
import sociable2 from "../../assets/sociable/sociable-2.png";
import sociable3 from "../../assets/sociable/sociable-3.png";
import sociable4 from "../../assets/sociable/sociable-4.png";
import sociable5 from "../../assets/sociable/sociable-5.png";

import portfolio from "../../assets/portfoliosite.png";
import panahon from "../../assets/panahon.webp";
import ams from "../../assets/ams.webp";

export const projects = [
	{
		title: "EmployX",
		shortDescription: "Full Stack Job Posting Web Application",
		description:
			"Built a full-stack Next.js job posting website using React for dynamic front-end interactivity, MongoDB for efficient database management, and Next.js server and API. Designed the user interface with Tailwind CSS for a visually appealing and responsive experience.\nImplemented secure user authentication and registration using the NextAuth framework, ensuring a seamless and personalized login process.\nKey features include job bookmarking, company-specific job browsing, personalized job recommendations based on user skills, and an intuitive admin panel for efficient company and job management.",
		image: employx,
		note: true,
		noteDetails: "Some features are still in development.",
		links: true,
		github: "https://github.com/aluamark/job-networking",
		site: "https://employx.vercel.app/",
		skills: [
			"Next.js",
			"React",
			"React-Query",
			"NextAuth",
			"TailwindCSS",
			"NoSQL",
		],
		slides: [
			{ url: employx },
			{ url: employx1 },
			{ url: employx2 },
			{ url: employx3 },
			{ url: employx4 },
			{ url: employx5 },
			{ url: employx6 },
			{ url: employx7 },
			{ url: employx8 },
		],
	},
	{
		title: "Sociable",
		shortDescription: "Full Stack Social Media Platform",
		description:
			"Developed a full-stack social media platform using React, Redux Toolkit, Node.js, and Express.js, enabling users to authenticate, post updates, like and comment on posts, and build connections by adding friends.\nImplemented responsive and modern UI using TailwindCSS, ensuring an intuitive user experience across different devices and screen sizes.\nLeveraged NoSQL MongoDB database to efficiently store and retrieve user data, optimizing performance and scalability for a growing user base.",
		image: sociable,
		note: true,
		noteDetails: "Some features are still in development.",
		links: true,
		github: "https://github.com/aluamark/sociable",
		site: "https://sociable-phi.vercel.app/",
		skills: ["React", "Redux", "TailwindCSS", "Node", "Express", "NoSQL"],
		slides: [
			{ url: sociable },
			{ url: sociable4 },
			{ url: sociable5 },
			{ url: sociable3 },
			{ url: sociable2 },
			{ url: sociable1 },
		],
	},
	{
		title: "RFID AMS",
		shortDescription: "Full Stack Attendance Monitoring System",
		description:
			"Developed an innovative Attendance Monitoring System utilizing RFID technology for efficient tracking of student attendance within the school premises.\nIntegrated a secure and convenient cashless transaction feature, facilitating fee payments and purchases within the school ecosystem.\nDesigned and implemented the system's user-friendly frontend using VB .NET and ensured optimal database functionality through a backend developed with SQL.",
		image: ams,
		note: true,
		noteDetails: "College Thesis",
		links: false,
		github: "",
		site: "",
		skills: ["VB.NET", "SQL"],
	},
	{
		title: "Panahon",
		description: "A simple weather application.",
		image: panahon,
		note: false,
		noteDetails: "",
		links: true,
		github: "https://github.com/aluamark/panahon",
		site: "https://panahon.vercel.app/",
		skills: ["NextJS", "TailwindCSS"],
	},
	{
		title: "My Portfolio",
		description: "A website where I can showcase my skills and projects.",
		image: portfolio,
		note: false,
		noteDetails: "",
		links: true,
		github: "https://github.com/aluamark/portfolio",
		site: "https://aluamark.vercel.app/",
		skills: ["React", "TailwindCSS"],
	},
];
