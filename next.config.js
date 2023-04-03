module.exports = {
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
}