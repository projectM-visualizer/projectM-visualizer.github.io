// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // General
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
    rootId: "app",
  },
  debug: process.env.NODE_ENV === "development",
  experimental: {
    payloadExtraction: false,
  },
  modules: [
    // https://nuxt.com/modules/icon
    "nuxt-icon",

    // https://nuxt.com/modules/image
    "@nuxt/image",

    // https://nuxt.com/modules/content
    "@nuxt/content",

    // https://nuxt.com/modules/color-mode
    "@nuxtjs/color-mode",

    // https://nuxt.com/modules/tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  router: {
    options: {
      strict: false,
    },
  },
  runtimeConfig: {
    private: {},
    public: {},
  },
  sourcemap: false,
  ssr: false,

  // Modules
  devtools: { enabled: process.env.NODE_ENV === "development" },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  content: {
    // Configuring code highlighting
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      preload: ["c", "cpp"],
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: "noopener noreferer",
          },
        ],
      ],
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1920,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    injectPosition: "last",
  },
});
