/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	theme: {
		extend: {
			colors: {
				task: {
					DEFAULT: '#FDDDD5',
					date: '#DED4F0',
					estimation: '#FDDDD5',
					todo: '#B3DFFF',
					ongoing: '#FFE5B3',
					done: '#F8F8FB',
					blocked: '#B83E51',
					normal: '#FDDDD5',
					high: '#B83E51',
					low: '#B3DFFF',
				},
				'base-400': '#F8F8FB'
			}
		}
	},
	safelist: [{
		pattern: /(bg|text|border)-task-(date|estimation|todo|ongoing|done|blocked|normal|high|low)/
	}],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8E6ECA',
					secondary: '#F68B71',
					accent: '#5C4580',
					neutral: '#878499',
					'base-100': '#fff',
					'base-200': '#E4E8FA',
					'base-300': '#D9D9D9',
					'base-content': '#000',
					info: '#FFA800',
					success: '#8EB83E',
					warning: '#FFA800',
					error: '#B83E51'
				}
			}
		]
	}
}
