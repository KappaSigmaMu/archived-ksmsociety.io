module.exports = {
  siteMetadata: {
    siteTitle: `Kappa Sigma Mu`,
    defaultTitle: `Kappa Sigma Mu`,
    siteTitleShort: `Kappa Sigma Mu`,
    siteDescription: `Website for the KappaSigmaMu Fratority`,
    siteUrl: `https://ksmsociety.io`,
    siteAuthor: `@ksmsociety`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kappa Sigma Mu`,
        short_name: `Kappa Sigma Mu`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ksmsociety.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
