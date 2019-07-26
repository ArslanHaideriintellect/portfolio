module.exports = {
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/home`,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
}