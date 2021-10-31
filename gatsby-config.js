module.exports = {
  siteMetadata: {
    title: `Loveleen Kukreja Blog`,
    name: `Loveleen Kukreja`,
    siteUrl: `https://loveleenkukreja.com`,
    description: `Yearning content on socio-economic affairs`,
    hero: {
      heading: `Loveleen Kukreja: Blog writing on socio-economic affairs.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kukrejaloveleen`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/loveleenkukreja`,
      },
      {
        name: `linkedin`,
        url: `https://in.linkedin.com/in/loveleen-kukreja-1a24581b1 `,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loveleen Kukreja Blog`,
        short_name: `Loveleen Kukreja`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
