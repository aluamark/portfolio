/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const neumorphism = require("tailwindcss-neumorphism");

module.exports = {
	important: true,
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		darkMode: "class",
		extend: {
			fontFamily: {
				mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
			},
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
		},
	},
	plugins: [neumorphism],
};
