/** @type {import('next-sitemap').IConfig} */ // このコードがあるとコード補完が可能になる

module.exports = {
  siteUrl: "https://chrono-office.vercel.app",
  outDir: "./out", // SSGだとビルド後にoutディレクトリができるので合わせる
  generateRobotsTxt: true, // (optional).      // robots.txtが必要な場合は指定する
  // ...other options
};
