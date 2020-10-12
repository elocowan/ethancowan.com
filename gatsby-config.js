module.exports = {
  siteMetadata: {
    title: `Ethan Cowan`,
    description: `A personal website and blog about Somatics in the age of the internet. Includes information about the Feldenkrais Method.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
