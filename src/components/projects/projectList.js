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

import panahon from "../../assets/panahon.webp";
import ams from "../../assets/ams.webp";

export const projects = [
	{
		title: "EmployX",
		shortDescription: "Full Stack Job Posting Platform",
		description:
			"Built a full-stack Next.js job posting website using React for dynamic front-end interactivity, MongoDB for efficient database management, and Next.js server and API. Designed the user interface with Tailwind CSS for a visually appealing and responsive experience.\nImplemented secure user authentication and registration using the NextAuth framework, ensuring a seamless and personalized login process.\nKey features include job bookmarking, company-specific job browsing, personalized job recommendations based on user skills, and an intuitive admin panel for efficient company and job management.",
		image: employx,
		note: true,
		noteDetails:
			"Due to the use of NextAuth, the login functionality is disabled here. For a complete site experience, please visit the live demo.",
		links: true,
		github: "https://github.com/aluamark/job-networking",
		site: "https://employx.vercel.app/",
		skills: [
			"Next",
			"NextAuth",
			"React",
			"React Query",
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
		note: false,
		noteDetails: "",
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
		title: "BetPanda",
		shortDescription: "Full Stack Esports Betting Platform",
		description:
			"Introducing a cutting-edge betting platform developed using Next.js, React, and Tailwind CSS, this dynamic website offers a seamless and immersive betting experience. Powered by React Query, it provides real-time data updates and ensures smooth interactions with the backend built on Node.js and Express, communicating with a MongoDB NoSQL database for efficient data storage and retrieval. Additionally, a scheduled cron job optimizes site performance and data integrity. This innovative betting site showcases my expertise in full-stack web development and demonstrates my ability to create modern, responsive, and data-driven applications.",
		image: sociable,
		note: true,
		noteDetails:
			"Due to the use of NextAuth, the login functionality is disabled here. For a complete site experience, please visit the live demo.",
		links: true,
		github: "https://github.com/aluamark/betpanda",
		site: "https://betpanda.vercel.app/",
		skills: [
			"Next 13 App Directory",
			"NextAuth",
			"React",
			"React Query",
			"TailwindCSS",
			"Node",
			"Express",
			"CRON",
			"NoSQL",
		],
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
		title: "RFID AMS - College Thesis",
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
		shortDescription: "A simple weather application",
		description: "",
		image: panahon,
		note: false,
		noteDetails: "",
		links: true,
		github: "https://github.com/aluamark/panahon",
		site: "https://panahon.vercel.app/",
		skills: ["Next", "TailwindCSS"],
	},
];
