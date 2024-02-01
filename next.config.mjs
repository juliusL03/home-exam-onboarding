import { join } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [join('styles')]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [{loader: '@svgr/webpack', options: {icon: true}}]
		})

		return config
	}
}

export default nextConfig
