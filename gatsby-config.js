module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    FUNCTIONS: false,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  pathPrefix: "/",
  siteMetadata: {
    basePath: "/",
    configPath: "src/config",
    docsPath: "content",
    defaultTitle: "Kappa Sigma Mu",
    siteAuthor: "@ksmsociety",
    siteDescription: "Website for the KappaSigmaMu Fratority",
    siteImage: "/banner.png",
    siteLanguage: "en",
    siteTitle: "Kappa Sigma Mu",
    siteTitleShort: "Kappa Sigma Mu",
    siteUrl: "https://ksmsociety.io",
    themeColor: "#8257E6",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-embedder",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-copy-linked-files",
        ],
        plugins: ["gatsby-remark-autolink-headers", "gatsby-remark-images"],
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://ksmsociety.io",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kappa Sigma Mu",
        short_name: "Kappa Sigma Mu",
        start_url: "/",
        background_color: "#ffffff",
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-sitemap",
  ],
};
