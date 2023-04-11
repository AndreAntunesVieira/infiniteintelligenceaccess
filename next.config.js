// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/events/teste': { page: '/events/[eventSlug]', query: { title: 'teste' } },
        }
    },
    i18n: {
        locales: ['en', 'pt', 'nl'],
        defaultLocale: 'pt',
    },
}

module.exports = nextConfig
