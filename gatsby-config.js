require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://deepbluefishing.ae`,
    title: "DeepBlueFishing",
    description:"Your way for safe and fun Fishing",
    twitter: "",
    banner:"/logo.png",
    googleConsole:" "
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 60
      },
    },
    "gatsby-plugin-image",
    `gatsby-alias-imports`,
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/assets/data/",
      },
      __key: "data",
    },

    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `GTM-NCVDDSC`,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `AW-990530483`,
        head: false,
      },
    },
  ],
};
