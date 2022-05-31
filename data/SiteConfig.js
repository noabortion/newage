const config = {
  // Site info
  siteTitle: "Peligros Nueva Era", // Site title.
  siteTitleShort: "Peligros Nueva Era", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Peligros Nueva Era", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://" + process.env.PUBLIC_URL, // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Informar peligros de la Nueva Era", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "es",
  siteFBAppID: "399626517562189", // FB Application ID for using app insights
  googleAnalyticsID: "UA-96543695-7", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 12,
  postsPerPage: 12,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "gb-template", // Disqus shortname.
  btnLoadComments: "Cargar Comentarios",
  // Use for home page
  numberLoadmore: 12,
  btnLoadmore: "Cargar más",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent:
    "Nose encontró la pagina",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categorias",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Ultimos posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Busqueda?",
  searchWidgetPlaceHolder: "Busca palabra clave",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Sitio Cisne Nueva Era",
      url: "https://www.cisne.org.mx",
    },
    ,
  ],
  // Use for user info
  userName: " Jaime Duarte Martínez", // Username to display in the author segment.
  userEmail: "https://www.cisne.org.mx/", // Email used for RSS feed"s author segment
  userTwitter: "CISNE_2012", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "México", // User location to display in the author segment.
  userAvatar:
    "https://dev2.covalenciawebs.com/wp-content/uploads/2015/06/como-crear-tu-avatar-con-gravatar.png.webp", // User avatar to display in the author segment.
  userDescription:
    "Checar sobre la nueva era", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:conferencias@cisne.org.mx",
      iconClassName: "far envelope",
    },
    {
      label: "Website",
      url: "https://www.cisne.org.mx/",
      iconClassName: "fas globe",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CISNE_2012",
      iconClassName: "fab twitter",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/groups/cisneinformativo",
      iconClassName: "fab facebook-f",
    },
  ],
  // Use for navigation
  navTitle: "Nueva Era",
  navLinks: [
    { label: "Acerca", url: "/about" },
    { label: "Contacto", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/groups/cisneinformativo",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CISNE_2012",
      iconClassName: "fab twitter",
    },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Sitemap", url: "https://" + process.env.PUBLIC_URL + "/sitemap.xml" },
  ],
  copyright: "Copyright © 2022",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
