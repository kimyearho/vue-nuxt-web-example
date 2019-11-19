module.exports = {
  /*
   ** 페이지 헤더 및 기본 메타태그 설정
   */
  head: {
    title: "nuxt-web",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      }
    ]
  },

  /**
   * 소스 기본경로 지정
   */
  srcDir: "src/",

  /**
   * 컴포넌트 캐시 사용
   */
  cache: {
    max: 1000,
    maxAge: 900000
  },

  // 플러그인 옵션
  // https://ko.nuxtjs.org/api/configuration-plugins
  plugins: [
    { src: "~plugins/vue-logger", ssr: false },
    { src: "~plugins/axios" }
  ],

  router: {
    // middleware: 'middlewareExample'
  },

  /*
   ** 사용자 정의 로딩 설정
   */
  loading: { color: "#3B8070" },

  // 전역 CSS 옵션
  css: ["~/assets/common.css"],

  modules: ['@nuxtjs/vuetify', "@nuxtjs/axios", "@nuxtjs/auth"],

  // Doc: https://github.com/nuxt-community/vuetify-module
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      icons: "md"
    },
    theme: {
      dark: true
    }
    // optionsPath: "./vuetify.options.js"
  },

  axios: {
    proxy: true
  },

  proxy: {
    "/api": "http://localhost:3000"
  },

  auth: {
    redirect: {
      callback: "/callback"
    },
    strategies: {
      google: {
        client_id:
          "935273157610-cdg83657n0i05utaco8l9rntdvv41li2.apps.googleusercontent.com",
      }
    }
  },

  // oauth: {
  //   sessionName: "GoogleOauth2",
  //   secretKey: "1234",
  //   oauthHost: "https://www.googleapis.com/oauth2/v2",
  //   oauthClientID:
  //     "935273157610-cdg83657n0i05utaco8l9rntdvv41li2.apps.googleusercontent.com",
  //   oauthClientSecret: "x2FLLw0DQWVxchTCFyciQLlw",
  //   authorizationPath: "/auth",
  //   scopes: [
  //     "https://www.googleapis.com/auth/userinfo.profile",
  //     "https://www.googleapis.com/auth/youtube"
  //   ]
  // },

  /*
   ** 빌드 설정
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
