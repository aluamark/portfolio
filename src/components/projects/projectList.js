import employx from "../../assets/employx.webp";
import sociable from "../../assets/sociable.webp";
import portfolio from "../../assets/portfoliosite.png";
import panahon from "../../assets/panahon.webp";
import ams from "../../assets/ams.webp";

export const projects = [
	{
		title: "RFID AMS",
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
		title: "EmployX",
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
	},
	{
		title: "Sociable",
		description:
			"Developed a full-stack social media platform using React, Redux Toolkit, Node.js, and Express.js, enabling users to authenticate, post updates, like and comment on posts, and build connections by adding friends.\nImplemented responsive and modern UI using TailwindCSS, ensuring an intuitive user experience across different devices and screen sizes.\nLeveraged NoSQL MongoDB database to efficiently store and retrieve user data, optimizing performance and scalability for a growing user base.",
		image: sociable,
		note: true,
		noteDetails: "The forget password feature is still in development",
		links: true,
		github: "https://github.com/aluamark/sociable",
		site: "https://sociable-phi.vercel.app/",
		skills: ["React", "Redux", "TailwindCSS", "Node", "Express", "NoSQL"],
	},
	{
		title: "Panahon",
		description: "Weather application built using Next.JS",
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
