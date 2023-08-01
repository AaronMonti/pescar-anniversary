/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
        'pescar-blue': '#1F288C',
				'pescar-orange': '#FD7202',
      },
		},
		fontFamily: {
			'oswald': ['Oswald, sans-serif'],
			'roboto': ['Roboto, sans-serif']
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}
