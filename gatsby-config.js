module.exports = {
  pathPrefix:'/marineflaming',
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-mantine',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/loco-marine.png`, // This path is relative to the root of the site.
      },
    }, 
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
      nodeType: 'Test', // Created Node type name
      imagePath: 'imgUrl' // The image url name in test node type
      }
    },  
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost/marineflaming/graphql",
      },
    },
    { 
      resolve: "gatsby-source-graphql",
      options: {
        typeName:'WordPress',
        fieldName:'wordpress',
        url: "http://localhost/marineflaming/graphql",
        refetchInterval:180
      },
    },
    {
      resolve: "gatsby-plugin-gravity-forms",
      options: {
        // This URL should be the same as you use for your
        // gatsby-source-wordpress options.
        url: "http://localhost/marineflaming/graphql",
      },
      schema: {
        requestConcurrency: 5, // currently set to 5
        previewRequestConcurrency: 2, // currently set to 2
        perPage: 25,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `noto serif\:400,400i,700,700i`,
          `poppins\:300,400,500,600,700`,
          `open sans\:300,400,500,600,700`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
