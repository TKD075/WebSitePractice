const isPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'WebSitePractice'; // ← GitHubリポ名

export default {
  output: 'export',                 // 静的書き出し
    images: { unoptimized: true },  // Next/Image最適化を切って純静的に
  trailingSlash: true,              // 末尾スラッシュを付けて静的ホスティングと相性良く
    basePath: isPages ? `/${repo}` : '',
    assetPrefix: isPages ? `/${repo}/` : '',
};
