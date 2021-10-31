<template>
  <v-app dark>
    <v-container>
      <the-blog-header></the-blog-header>
      <v-main>
        <nuxt />
      </v-main>
    </v-container>
    <the-blog-footer></the-blog-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      //   title: this.title,
      //   metaInfo: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      //   },
      meta: [
        {
          hid: 'blog',
          name: 'description',
          content: 'Home page description',
        },
      ],
    }
  },
}
</script>
