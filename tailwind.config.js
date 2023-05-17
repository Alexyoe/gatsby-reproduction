module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	// @ts-ignore
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				Dark: {
					'color-scheme': 'dark',
					primary: '#f28c18',
					'primary-content': '#131616',
					secondary: '#6d3a9c',
					accent: '#51a800',
					neutral: '#1b1d1d',
					'base-100': '#212121',
					info: '#2563eb',
					success: '#16a34a',
					warning: '#d97706',
					error: '#dc2626'
				},
				Light: {
					'color-scheme': 'light',
					primary: '#e0a82e',
					'primary-content': '#181830',
					secondary: '#f9d72f',
					'secondary-content': '#181830',
					accent: '#181830',
					neutral: '#181830',
					'base-100': '#ffffff'
				}
			}
		]
	}
}
