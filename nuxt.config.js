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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
    { src: "~plugins/element-ui", ssr: true }
  ],

  /*
  # 공통 전역 미들웨어 설정
  - 미들웨어를 지정하면 페이지가 바뀔때마다 실행됨.
  - 미들웨어는 Vue 인스턴스(페이지)가 랜더링되기전에 실행 됨.
  router: {
    middleware: 'stats'
  },
  */

  /*
   ** 사용자 정의 로딩 설정
   */
  loading: { color: "#3B8070" },

  // 전역 CSS 옵션
  css: [
    // 프로젝트 내부의 Css 파일
    '~~/node_modules/element-ui/lib/theme-chalk/index.css',
    '~/assets/common.css'
  ],

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
