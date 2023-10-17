/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			height: (theme) => ({
				"screen/1.5": "calc(100vh / 1.5)",
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)"
			}),
			colors: {
				"green-waqanki": "#3fb54b"
			}
		}
	},
	plugins: []
};
