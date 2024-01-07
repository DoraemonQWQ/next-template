// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	app: {
		// head
		head: {
			title: 'TaroTa',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'TaroTa',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '' }],
		}
	},

	// css
	css: ['~/assets/scss/index.scss'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	typescript: {
		strict: true,
		shim: false,
	},

	// build modules
	modules: [
		'@vueuse/nuxt',
		'@unocss/nuxt',
		'@pinia/nuxt',
		'@element-plus/nuxt',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss'
	],

	// vueuse
	vueuse: {
		ssrHandlers: true,
	},

	// colorMode
	colorMode: {
		classSuffix: '',
	},

	unocss: {
		uno: true,
		attributify: true,
		icons: {
			scale: 1.2,
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
				},
			},
		},
	},
	elementPlus: {
		icon: 'ElIcon',
		importStyle: 'scss',
		// themes: ['dark'],
	},
})
