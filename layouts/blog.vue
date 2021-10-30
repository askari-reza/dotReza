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
import TheBlogFooter from '~/components/layouts/TheBlogFooter.vue'
import TheBlogHeader from '~/components/layouts/TheBlogHeader.vue'
export default {
  components: {
    TheBlogHeader,
    TheBlogFooter,
  },
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
