<template>
  <v-container>
    <article>
      <v-card>
        <v-card-title>
          <img :src="article.img" :alt="article.alt" />
          <h1>{{ article.title }}</h1>
        </v-card-title>
        <v-card-subtitle>
          <span>Article created at: {{ formatDate(article.createdAt) }}</span>
          |
          <span>last updated: {{ formatDate(article.updatedAt) }}</span>
          <p>{{ article.description }}</p>
        </v-card-subtitle>
        <hr />
        <v-card-actions class="d-block">
          <em>table of contents</em>
          <nav>
            <v-list nav>
              <v-list-item v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </v-list-item>
            </v-list>
          </nav>
        </v-card-actions>

        <v-card-text>
          <nuxt-content :document="article" />
        </v-card-text>
      </v-card>
    </article>
  </v-container>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
::v-deep .nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
::v-deep .nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
::v-deep .nuxt-content p {
  /* color: crimson; */
  margin-bottom: 20px;
}
/***
This is useful for linking to that section of the page 
***/
/* ::v-deep .icon.icon-link {
  background-image: url('~assets/images/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>
