/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://suishousai2026.vercel.app",
  generateRobotsTxt: true,

  /** ↓ここから下までを消すとgoogle検索に乗せられる（すぐには乗らない）*/
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  },
  /**ここまで消す */
};