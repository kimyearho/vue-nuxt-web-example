<template>
  <section class="container"></section>
</template>

<script>
export default {
  /**
   * NOTE
   * LifeCycle
   * asyncData -> fetch -> beforeCreate -> created -> head -> mounted
   */

  /**
   * NOTE
   * middleware 훅은 페이지가 랜더링 되기전에 호출 됨.
   * middleware 훅은 String or Array 로 지정할 수 있음
   * middleware 훅은 서버 사이드임.
   *
   * SECTION
   * https://ko.nuxtjs.org/guide/routing#middleware
   */
  middleware: "",

  /**
   * NOTE
   * asyncData 훅은 Store를 사용하지 않고 서버사이드와 통신할 수 있음.
   * asyncData 훅은 서버사이드에서 호출되거나, 페이지 이동시 호출 됨.
   * asyncData 훅은 반환 된 결과가 자동으로 Local Data와 머지 됨.
   * asyncData 훅은 컴포넌트가 생성되기전에 호출되므로 this를 사용할 수 없음.
   *
   * SECTION
   * https://ko.nuxtjs.org/guide/async-data/
   */
  asyncData(context) {
    return { name: "World" };
  },

  /**
   * NOTE
   * fetch 훅은 페이지가 랜더링 되기전에 Store를 채우기 위해 사용 됨.
   * fetch 훅은 페이지가 변경되면 호출 됨.
   *
   * SECTION
   * https://ko.nuxtjs.org/api/pages-fetch/
   */
  fetch() {},

  /**
   * NOTE
   * head 훅은 현재 페이지에 대한 특정 메타 태그를 설정할 수 있음.
   *
   * SECTION
   * https://ko.nuxtjs.org/api/pages-head/
   */
  head() {},
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

