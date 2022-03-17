module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				'input-border': '#2B3444',
				pink: '#D05663',
				'input-grey': '#938D8D',
				success: '#55B727',
				error: '#D05663',
				warning: '#F1CF1A',
				information: '#2B3444',
				white: '#fdfdfd',
				primary: '#2B3444',
				secondary: '#D05663',
        "hrsecondary" : "#C55863",
			},
		},
	},
	plugins: [],
};
