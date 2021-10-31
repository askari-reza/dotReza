<template>
  <div
    class="d-flex align-center justify-center justify-space-between flex-grow-1"
  >
    <div>
      <span class="subtitle-1">Web developer </span>
      <v-divider></v-divider>
      <span class="subtitle-2"> frontend </span>
    </div>
    <div>
      <v-btn text href="#">CALL ME. (+98)936-000-8696</v-btn>
      <span>/</span>
      <v-btn text href="#">mail@dotreza.com</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {}
  },
  async fetch() {
    const content = await this.$nuxt.context
      .$content('app/contact-info')
      .only(['mail', 'tel'])
      .fetch()
    const unusedItems = ['extension', 'path']
    unusedItems.forEach((item) => delete content[item])
    this.contact = content
  },
}
</script>

<style></style>
