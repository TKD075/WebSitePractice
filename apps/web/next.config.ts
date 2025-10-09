const isPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'WebSitePractice'; // リポ名

export default {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: isPages ? `/${repo}` : '',
    assetPrefix: isPages ? `/${repo}/` : '',
};
