/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				principal: {
					100: '#f7cf91',
					200: '#f7cf91',
					300: '#f7cf91',
					400: '#f7cf91',
					500: '#f6c882',
					600: '#f6c172',
					700: '#f4ba61',
					800: '#f3b350',
					900: '#f2ab3f',
					DEFAULT: '#f2aa3c'
				},
				'marron': {
					DEFAULT: '#424649'
				},
				'principal-dark': '#424649'
			},

			fontSize: {
				xxs: '.625rem'
			},
			fontFamily: {
				body: ['Archivo', 'system-ui', 'sans-serif'],
				title: ['Archivo Black', 'system-ui', 'sans-serif']
			}
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		}
	},
	plugins: [],
}
